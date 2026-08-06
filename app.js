const db = require("./database");
const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Task API is running...");
});

// Get all tasks
app.get("/tasks", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM tasks ORDER BY id"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

// Get a single task by ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

// Create a new task
app.post("/tasks", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title || title.trim() === "") {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        const result = await db.query(
            "INSERT INTO tasks (title, done) VALUES ($1, $2) RETURNING *",
            [title, false]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, done } = req.body;

        const exists = await db.query(
            "SELECT * FROM tasks WHERE id = $1",
            [id]
        );

        if (exists.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        const result = await db.query(
            `UPDATE tasks
             SET title = $1,
                 done = $2
             WHERE id = $3
             RETURNING *`,
            [title, done, id]
        );

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            "DELETE FROM tasks WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
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
app.get("/tasks", (req, res) => {

    const tasks = db.prepare("SELECT * FROM tasks").all();

    res.status(200).json(tasks);

});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {

    const id = req.params.id;

    const task = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json(task);

});

// Create a new task
app.post("/tasks", (req, res) => {

    const { title } = req.body;

    // Validation
    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    // Insert task into database
    const result = db
        .prepare("INSERT INTO tasks (title, done) VALUES (?, ?)")
        .run(title, 0);

    // Fetch the newly created task
    const newTask = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(result.lastInsertRowid);

    res.status(201).json(newTask);

});

// Update a task
app.put("/tasks/:id", (req, res) => {

    const id = req.params.id;
    const { title, done } = req.body;

    // Check if task exists
    const task = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    // Update task
    db.prepare(
        "UPDATE tasks SET title = ?, done = ? WHERE id = ?"
    ).run(title, done, id);

    // Return updated task
    const updatedTask = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(id);

    res.status(200).json(updatedTask);

});

// Delete a task
app.delete("/tasks/:id", (req, res) => {

    const id = req.params.id;

    // Check if task exists
    const task = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    // Delete task
    db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

    res.status(200).json({
        message: "Task deleted successfully"
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");

const app = express();
const PORT = 3000;

// Endpoint 1
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my Backend Internship Assignment!"
    });
});

// Endpoint 2
app.get("/status", (req, res) => {
    res.json({
        status: "success",
        message: "Server is running successfully!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
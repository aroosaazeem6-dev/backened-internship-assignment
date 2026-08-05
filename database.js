const Database = require("better-sqlite3");

const db = new Database("tasks.db");

// Create table if it doesn't exist
db.prepare(`
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL
)
`).run();

// Check if table is empty
const count = db.prepare("SELECT COUNT(*) AS count FROM tasks").get();

if (count.count === 0) {

    const insert = db.prepare(
        "INSERT INTO tasks (title, done) VALUES (?, ?)"
    );

    insert.run("Learn Express", 0);
    insert.run("Learn SQLite", 0);
    insert.run("Build CRUD API", 0);

    console.log("Example tasks inserted.");
}

console.log("Database connected successfully.");

module.exports = db;
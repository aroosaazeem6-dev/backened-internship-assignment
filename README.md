<div align="center">

# Backend SQLite CRUD API

A RESTful Task Management API built with **Node.js**, **Express.js**, and **SQLite**.

![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

---

# Table of Contents

- Project Overview
- Features
- Tech Stack
- Project Structure
- Database Schema
- Installation
- Running the Project
- API Endpoints
- SQL Queries Executed
- Database Preview
- Testing
- Author

---

# Project Overview

This project demonstrates how to build a complete RESTful CRUD API using **Express.js** with **SQLite** as the persistent storage layer.

Unlike an in-memory application, all tasks are stored inside a SQLite database, allowing data to persist between server restarts.

---

# Features

- Persistent SQLite Database
- Automatic Database Creation
- Automatic Table Creation
- Initial Data Seeding
- Create Tasks
- Retrieve Tasks
- Update Tasks
- Delete Tasks
- Input Validation
- Proper HTTP Status Codes
- RESTful API Design
- SQL Integration

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| SQLite | Database |
| better-sqlite3 | SQLite Driver |
| Postman | API Testing |
| DB Browser for SQLite | Database Management |

---

# Project Structure

```text
backend-week3-sqlite/
│
├── app.js
├── database.js
├── tasks.db
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── images/
    └── sqlite-database.png
```

---

# Database Schema

## Database

```
tasks.db
```

## Table

```
tasks
```

| Column | Data Type | Description |
|---------|-----------|-------------|
| id | INTEGER | Primary Key |
| title | TEXT | Task Title |
| done | BOOLEAN | Completion Status |

---

# Why SQLite?

SQLite was selected because it is:

- Lightweight
- Serverless
- Easy to configure
- Fast for local development
- Stores everything in a single file
- Perfect for educational backend projects

The application automatically creates the database and inserts sample data when the table is empty.

---

# Installation

Clone the repository

```bash
git clone https://github.com/aroosaazeem6-dev/backened-internship-assignment.git
```

Navigate to the project

```bash
cd backened-internship-assignment
```

Install dependencies

```bash
npm install
```

---

# Running the Project

Start the server

```bash
node app.js
```

The server will run at

```text
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint | Description |
|:------:|----------|-------------|
| GET | `/` | Home Route |
| GET | `/tasks` | Retrieve All Tasks |
| GET | `/tasks/:id` | Retrieve Task By ID |
| POST | `/tasks` | Create New Task |
| PUT | `/tasks/:id` | Update Existing Task |
| DELETE | `/tasks/:id` | Delete Task |

---

## SQL Queries Executed

### Retrieve all tasks

```sql
SELECT * FROM tasks;
```

<img width="632" height="503" alt="Database" src="https://github.com/user-attachments/assets/0938a028-536e-4dbe-bb59-f5e87a19b1ce" />

---

### Retrieve completed tasks

```sql
SELECT * FROM tasks WHERE done = 1;
```

---

### Count tasks

```sql
SELECT COUNT(*) FROM tasks;
```

<img width="629" height="500" alt="Database2" src="https://github.com/user-attachments/assets/425770ad-293f-4bc7-8ab0-bb03a2e8709f" />

---

### Mark all tasks as completed

```sql
UPDATE tasks
SET done = 1;
```

---

### Delete completed tasks

```sql
DELETE FROM tasks
WHERE done = 1;
```
---

# Database Preview

The following screenshot shows the SQLite database opened in **DB Browser for SQLite**.

<img width="629" height="503" alt="Database3" src="https://github.com/user-attachments/assets/58702988-54d1-4ce0-b971-79e52ffedac7" />


# Testing

The API was tested using **Postman**.

The following operations were verified successfully:

| Operation | Status |
|------------|:------:|
| GET All Tasks | ✔ |
| GET Task By ID | ✔ |
| POST Task | ✔ |
| PUT Task | ✔ |
| DELETE Task | ✔ |
| SQL Verification | ✔ |

---

# Author

**Aroosa Azeem**

Backend AI Engineering Internship

Week 3 — SQLite CRUD Assignment

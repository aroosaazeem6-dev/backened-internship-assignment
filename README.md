<div align="center">

## Assigment "A2" Connecting To Database

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

<img width="959" height="506" alt="Postman" src="https://github.com/user-attachments/assets/ef5da770-66c8-44e5-8697-c1a95e8aae81" />


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


---



<div align="center">


## Assignment "A3" – PostgreSQL with Docker & Docker Compose

</div>

## Overview

This assignment upgrades the Task Management API from SQLite to PostgreSQL while containerizing the entire application using Docker and Docker Compose. The application now runs with a single command, stores data in PostgreSQL, and persists data across container restarts using Docker volumes.

---

## Objectives

- Replace the SQLite database with PostgreSQL
- Containerize the Node.js application using Docker
- Manage the application and database with Docker Compose
- Store sensitive configuration using environment variables
- Persist data using Docker volumes
- Keep the API routes unchanged while replacing the database layer
- Verify persistence after restarting both the application and database containers

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| PostgreSQL | Relational Database |
| pg | PostgreSQL Client |
| Docker | Containerization |
| Docker Compose | Multi-container Orchestration |
| dotenv | Environment Variable Management |
| Postman | API Testing |

---

## Project Structure

```text
.
├── app.js
├── database.js
├── Dockerfile
├── docker-compose.yml
├── init.sql
├── .env.example
├── .dockerignore
├── package.json
└── README.md
```

---

## Docker Architecture

```
                Docker Compose
                      │
      ┌───────────────┴───────────────┐
      │                               │
┌───────────────┐              ┌───────────────┐
│   Express API │────────────▶│   PostgreSQL   │
│   (Node.js)   │              │   Database     │
└───────────────┘              └───────────────┘
         │                              │
         └──────── Docker Network ──────┘
                        │
                 Persistent Volume
```

---

## Environment Variables

Create a `.env` file using the provided `.env.example`.

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=dev
DB_NAME=tasks
```

---

## Docker Commands

### Build and Start

```bash
docker compose up --build
```

### Stop Containers

```bash
docker compose down
```

### View Running Containers

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Home Route |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve task by ID |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

---

## Database Initialization

The PostgreSQL database is automatically initialized using the `init.sql` script during the first container startup.

The script:

- Creates the `tasks` table
- Inserts sample records
- Prepares the database for immediate API usage

---

## Data Persistence

Persistence was verified using Docker volumes.

Verification process:

1. Started the application using Docker Compose.
2. Created new tasks through the REST API.
3. Stopped both containers.
4. Restarted the complete stack.
5. Retrieved all tasks successfully.
6. Confirmed that previously created data remained available.

This demonstrates that data persists independently of the application container lifecycle.

---

## Assignment Highlights

- Migrated from SQLite to PostgreSQL
- Implemented PostgreSQL connectivity using the `pg` package
- Used environment variables for secure configuration
- Containerized the complete application
- Managed multiple containers using Docker Compose
- Demonstrated persistent database storage using Docker volumes
- Preserved existing REST API endpoints without changing route logic

---

## Screenshots

### PostgreSQL Connection Successful

<img width="452" height="361" alt="PostgreeSQL" src="https://github.com/user-attachments/assets/3527f1b1-f131-48f8-978e-3d0513261036" />

---

### CRUD Operations

<img width="953" height="504" alt="Postman 3 1" src="https://github.com/user-attachments/assets/dd1a5ba6-c1fb-4f7d-be2c-f8e626aac489" />

<img width="941" height="487" alt="Postaman 32" src="https://github.com/user-attachments/assets/aa562833-a294-4020-8291-7d93970a7e69" />

---

### Persistence Verification

<img width="955" height="503" alt="Postman Persistence 3 3" src="https://github.com/user-attachments/assets/22b91d8f-03f0-47c9-8d57-e75777ad2d55" />

---

## Learning Outcomes

Through this assignment I learned:

- Docker containerization
- Docker Compose orchestration
- PostgreSQL integration with Node.js
- Environment variable management
- Persistent Docker volumes
- Database migration from SQLite to PostgreSQL
- Maintaining application architecture while changing the database layer

---

## Author

**Aroosa Azeem**

FlyRank Backend Internship

# Student Management REST API

Lab Assignment 2 - Web Dev III (Node.js & Express)

## Run
npm install
npm start

Server runs at http://localhost:3000

## Endpoints
| Method | Route | Description | Success | Errors |
|---|---|---|---|---|
| GET | /students | Get all students | 200 | - |
| GET | /students/:id | Get one student | 200 | 404 |
| POST | /students | Add a student | 201 | 400 |
| PUT | /students/:id | Update a student | 200 | 400, 404 |
| DELETE | /students/:id | Delete a student | 200 | 404 |

Unknown routes return 404. Invalid JSON returns 400.

## Structure
- routes/studentRoutes.js - student routes
- middleware/logger.js - request logger
- data/students.js - in-memory student data
- app.js - server setup

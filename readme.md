# Tasks API

A simple **Node.js + Express** REST API to manage tasks (like a to-do list).  
You can **view, add, update, and delete tasks**.

---

## Features

- **GET /tasks** → Retrieve all tasks  
- **POST /tasks** → Add a new task  
- **PUT /tasks/:id** → Replace a task completely  
- **PATCH /tasks/:id** → Update part of a task  
- **DELETE /tasks/:id** → Remove a task  

---

## Notes

- Tasks are stored **in memory**, so they will reset if the server restarts.  
- Each task has:
  - `id` → Unique identifier  
  - `title` → Task description  
  - `completed` → Boolean status  

---

## YouTube Channel

Check out my videos here: [My YouTube Channel](https://studio.youtube.com/channel/UCfiXrFgX8tVJ_6QDT7CpN3A/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D)

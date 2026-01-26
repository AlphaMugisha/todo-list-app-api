# 📝 Tasks API

A simple **Node.js + Express** REST API for managing tasks  
(like a basic to-do list backend).

You can **create, read, update, and delete tasks** using HTTP requests.

---

## 🚀 Features

- **GET /tasks** – View all tasks  
- **POST /tasks** – Add a new task  
- **PUT /tasks/:id** – Update a task completely  
- **PATCH /tasks/:id** – Update part of a task  
- **DELETE /tasks/:id** – Delete a task  

---

## 📌 Task Structure

Each task contains:

- `id` → Unique number  
- `title` → Task name  
- `completed` → `true` or `false`  

---

## ⚠️ Notes

- Data is stored **in memory**
- All tasks reset when the server restarts
- This project is meant for **learning purposes**

---

## 🎥 YouTube Channel

I share programming tutorials and projects here:  
👉 https://www.youtube.com/channel/UCfiXrFgX8tVJ_6QDT7CpN3A

const express = require('express');
const app = express();
app.use(express.json()); // to allow json files that will be sent from the client

app.listen("3000", () => {
  console.log('Server is running on port 3000');
});

let tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Do homework', completed: false },
  { id: 3, title: 'Play football', completed: false },
  { id: 4, title: 'Read a book', completed: false },
];

app.get('/tasks', (req, res) => {
  console.log("GET /tasks called");
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  console.log("POST /tasks called:", newTask);
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get ('/tasks/:id', (req, res) => {
  const id = req.params.id;
  console.log("GET /tasks/:id called with id:", id);
  const task = tasks.find(t => t.id == id);
  res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  console.log("PUT /tasks/:id called with id:", id, "and updated task:", updatedTask);
  tasks.title = updatedTask.title;
  tasks.completed = updatedTask.completed;
  res.send(`Task with id ${id} updated to title: ${tasks.title}, completed: ${tasks.completed}`);
});
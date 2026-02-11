const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to allow json files that will be sent from the client

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
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  console.log("POST /tasks called:", newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[taskIndex] = { id, title, completed };
  console.log("PUT /tasks/:id called:", tasks[taskIndex]);
  res.json(tasks[taskIndex]);
});

app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ error: 'Task not found' });

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  console.log("PATCH /tasks/:id called:", task);
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  const deletedTask = tasks.splice(index, 1)[0];
  console.log("DELETE /tasks/:id called:", deletedTask);
  res.json(deletedTask);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("Tasks API ready. Number of tasks:", tasks.length);
});

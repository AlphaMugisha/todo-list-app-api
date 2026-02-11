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
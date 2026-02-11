const express = require('express');
const app = express();
app.use(express.json()); // to allow json files that will be sent from the client

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
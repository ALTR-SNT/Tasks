const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.get('/replica', (req, res) => {
  res.send('General Kenobi');
}); 

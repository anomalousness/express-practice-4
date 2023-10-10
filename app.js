const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: "The GET route" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
})

app.post('/', (req, res) => {
  try {
    res.status(201).json({ message: "The POST route" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
})

module.exports = app;
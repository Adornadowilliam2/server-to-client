const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // The Port your API will live on

app.use(cors());
app.use(express.json());

// This variable acts as our temporary "Database"
let dataStore = ["Item 1", "Item 2"];

// GET API: Retrieve the data
app.get('/api/items', (req, res) => {
  res.json(dataStore);
});

// POST API: Add new data
app.post('/api/items', (req, res) => {
  const newItem = req.body.item;
  dataStore.push(newItem);
  res.status(201).json({ message: "Added!", currentData: dataStore });
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
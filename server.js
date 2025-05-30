const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();

const client = new MongoClient('mongodb://localhost:27017');
let db;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/add-product', async (req, res) => {
  const { name, price } = req.body;
  await db.collection('products').insertOne({ name, price });
  res.sendStatus(200);
});

app.get('/products', async (req, res) => {
  const products = await db.collection('products').find().toArray();
  res.json(products);
});

async function start() {
  await client.connect();
  db = client.db('noon_store');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}

start();
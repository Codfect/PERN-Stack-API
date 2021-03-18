const express = require('express');
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json()); 
app.use(cors());

app.get('/', function(req, res) {
  res.json({message: 'Hello World'})
});

app.listen(7000, () => {
  console.log("Server Started");
});
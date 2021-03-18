const express = require('express');
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json()); 
app.use(cors());

//Register and login routes

app.use('/auth', require('./routes/jwtAuth'))

app.get('/', function(req, res) {
  res.json({message: 'Hello World'})
});

app.listen(7000, () => {
  console.log("Server Started");
});
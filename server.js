const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.headers("Access-Control-Allow-Origin": "*");
});

app.get('/:status', (req, res) => {
  res.sendStatus(req.params.status);
});

app.get('/', (req, res) => {
  res.send("add status code to url");
});

app.listen(PORT, console.log('server listening at port 3000'));

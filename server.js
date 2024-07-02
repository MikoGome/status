const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/:status', (req, res) => {
  res.sendStatus(req.params.status);
});

app.get('/', (req, res) => {
  res.send("add status code to url");
});

app.listen(PORT, console.log('server listening at port 3000'));

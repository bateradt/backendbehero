const express = require("express");
const {errors} = require('celebrate');
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

console.log('Servidor rodando na porta 3333');

app.listen(3333);

module.exports = app;
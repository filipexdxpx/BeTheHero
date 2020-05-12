const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

// avisa o node que estaremos usando json para as requisições
app.use(express.json());
app.use(routes);

app.listen(5000);

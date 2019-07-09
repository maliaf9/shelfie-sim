const express = require('express');

const app = express();

const port= 3339;

app.use(express.json());

app.listen(port, () => console.log(`I am Alive! ${port}`));
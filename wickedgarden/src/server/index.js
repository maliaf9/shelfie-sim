import "../setUpProxy.js"
const express = require("express");
const Herbs = require('../src/herbHoard.json');


const app = express();

app.use(express.json());

const {getHerbs, createHerbs, updateHerbs, deleteHerbs} =  require("./controllers/info_controller");

app.get('/api/herbs', getHerbs, Herbs);

app.post('/api/herbs', createHerbs);

app.put('/api/herbs/:id', updateHerbs);

app.delete('/api/herbs/:id', deleteHerbs);


const port = 3001;
app.listen(port, () => console.log(`I am Listening ${port}`));
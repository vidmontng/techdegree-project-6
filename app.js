const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

const data = require('./data.json');
const {projects} = data;



app.get('/', (req, res) => {
    const numberOfProjects = projects.length;
    res.send(`<h1>Hello, there are ${numberOfProjects} projects in the database</h1>`);
});





app.listen(3000);
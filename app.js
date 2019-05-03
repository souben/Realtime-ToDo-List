const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app=express();

const tasks=[];
// set the view engine to ejs
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// set bodyParser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// the home page
app.get('/', (req, res, next) =>{
    console.log(tasks);
    res.render('index', { title: 'Todolist', tasks: tasks});
})
app.post('/add', (req, res, next) =>{
    tasks.push(req.body.item_list);
    console.log(tasks);
    res.render('index', { title: 'Todolist', tasks: tasks});
    
})

app.get('/delete/:id',(req, res, next) =>{
    tasks.splice(req.params.id,1);
    res.render('index', { title: 'Todolist', tasks: tasks});
});







app.listen(4000);
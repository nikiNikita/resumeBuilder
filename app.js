var express = require('express');
var resume = require('./controllers/resumebuilderController.js');

var app = express();

//set template engine
app.set('view engine','ejs');


//static file
//app.use('/assets',express.static('./'));  this cane be used ./ because assets folder in there in this particular folder
app.use(express.static('./assets')); // this can be used for every request , this is kind of middleware where all static files are lookid into

//fire controllers
resume(app);


app.listen(2500); //listen to the port specified
console.log("listining to port 2500");



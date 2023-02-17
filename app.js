const express = require('express');
const morgan = require('morgan')

const app = express();

//middleware functions:
app.use(morgan('dev'));
app.use(express.json());
//express.static


//api endpoints (lines 12-23)
app.get('/api/v1/art/paintings',(req,res)=>{

});;

app.get('/api/v1/art/sculptures',(req,res)=>{

})

app.get('api/v1/art/jewelry',(req,res)=>{

})


module.exports = app;
const express = require('express');
const morgan = require('morgan')
const port = 8080;

const app = express();

//middleware 
app.use(morgan('dev'));
app.use(express.json());
//express.static

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


module.exports = app;
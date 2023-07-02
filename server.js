const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const app = require('./app');
const port = process.env.PORT || 8080;
const mongoDB = process.env.DATABASE;


mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log('DB connection was successful'))

// node server
app.listen(port,()=>{
    console.log(`'server is listening on port ${port}`)
})
//uncaught rejections

//uncaught exceptions
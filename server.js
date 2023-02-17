const mongoose = require('mongoose');
const app = require('./app');
const port = 8080;


mongoose.connect({
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log('DB connection was successful'))

// node server
app.listen(port,()=>{
    console.log(`'server is listening on port ${port}`);
})
//uncaught rejections

//uncaught exceptions
const mongoose = require('mongoose');
//**task */
//include dotenv for enviroment variables
const app = require('./app');
//**task */
//include enviroment variable with port
const port = 8080;
//**task */
//put the mongoDB connection string in a variable to not expose the db connection
mongoose.connect('mongodb+srv://Mon_Data_Base:tB1psKsxlbooot5K@tribecca-arts.ioquqqp.mongodb.net/?retryWrites=true&w=majority',{
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
const mongoose = require('mongoose');


mongoose.connect({
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log('DB connection was successful'))
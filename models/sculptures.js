const mongoose = require('mongoose');

const sculptureSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'All sculptures must have a title to be valid'],
        unique:true
    },
    caption:{
        type:String,
        required:[true,'All sculptures must have short description to be valid'],
        maxLength:[100,'Captions can not be longer than 100 characters '],
        minLength:[10,'Captions can not be shorter than 10 characters']
    }

    //price
})
const mongoose = require('mongoose');


const PaintingsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A painting must have title to be valid'],
        unique:true
    },
    caption:{
        type:String,
        required:[true,'A painting must have short descriptive caption to be valid'],
        maxLength:[100,'Captions can not be longer than 100 characters'],
        minLength:[10,'Captions can not be shroter than 10 characters']
    }
});//price

const Painting = mongoose.model('Painting',PaintingsSchema);

module.exports = Painting;
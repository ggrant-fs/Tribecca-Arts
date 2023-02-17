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
        maxLength:[40,'captions can not be longer than 40 characters'],
        minLength:[10,'captions can not be shroter than 10 characters']
    }
})

const Painting = mongoose.model('Painting',PaintingsSchema);

module.exports = Painting;
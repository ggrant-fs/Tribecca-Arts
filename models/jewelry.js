const mongoose = require('mongoose');


const JewelrySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'All jewelry must have a title to be valid'],
        unique:true
    },
    caption:{
        type:String,
    required:[true,'All jewelry must a have short description to be valid'],
    maxLength:[100,'Captions can not be longer than 100 characters'],
    minLength:[10,'Captions can not be shorter than 10 characters']
    }
    //price
});

const Jewelry = mongoose.model('Jewelry',JewelrySchema);

module.exports = Jewelry;
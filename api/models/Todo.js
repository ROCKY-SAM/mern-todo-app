const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoScheme = new Schema({
    text:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:true
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
});



const Todo = mongoose.model('Todo',TodoScheme);
module.exports = Todo;

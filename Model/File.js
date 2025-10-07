import mongoose from 'mongoose';
const bookschema = new mongoose.Schema({
    booktitle:{type : String , trim : true , required : true},
    data : {type : Buffer , required : true} ,
    fileType : {type : String , required : true},
    thumbnail : {type : Buffer , required : true}
})

const Book = mongoose.model('Book' , bookschema);

export default Book;
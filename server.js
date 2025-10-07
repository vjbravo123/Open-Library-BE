import express from 'express';
import cors from 'cors';
import multer from 'multer'
import Book from './Model/File.js';
import dotenv from 'dotenv';
import ConnectDB from './Config/DB.js';
dotenv.config();
const url = process.env.MONGO_URL;
const storage = multer.memoryStorage();
const upload = multer({storage});

const app = express();


app.use(cors());
app.use(express.json())
ConnectDB(url);

// app.post('/upload' , upload.single('file') , async(req , res)=>{
//     if(!req.file){return res.status(400).send("No files uploaded")}
//     try {
//         const book = await Book({
//             booktitle : req.file.originalname ,
//             fileType : req.file.mimetype ,
//             data : req.file.buffer 
//         })
//         await book.save();
//         res.json({message : "File uploaded and saved to db sucessfully"})
//     } catch (error) {
//         console.error("Error while uploading file : " , error);
//         res.status(500).json({message : "Server error"})
//     }
// })


app.post('/upload' , upload.fields([{name:"file" , maxCount:1} , {name:"thumbnail" , maxCount:1}]) , async(req,res)=>{
    console.log(req.files);
    if( !req.files || !req.files.file || !req.files.thumbnail){
        return res.status(400).send("Both the file and thumbnail are required");
    }
    try {
        console.log(req.files);
        
        const book = new Book({
            booktitle : req.files.file[0].originalname ,
            fileType : req.files.file[0].mimetype , 
            data : req.files.file[0].buffer , 
            thumbnail : req.files.thumbnail[0].buffer
        })
        await book.save();
        res.json({message:"File and thumbnail uploaded sucessfully"})
    } catch (error) {
        console.error("Error while uploading the file :" , error);
        res.status(500).json({message:"Server error"});s
        
    }
})

app.get("/getThumbnails" , async(req ,res)=>{
        const data = await Book.find({} , {booktitle:1 , thumbnail:1});
        
        const books = data.map((book)=>{
            const base64 = book.thumbnail.toString("base64");
            return {
                title : book.booktitle ,
                image :`data:image/jpeg;base64,${base64}`,
                id : book._id
            }
        })
        res.json(books);
})

app.get('/DownloadBook/:id' , async(req,res)=>{
try {
    const {id} = req.params;
    console.log(id);
    const book = await Book.findOne({_id:id} ,{data:1});
    if (!book) return res.status(404).send("Book not found");

    res.set({
        'Content-Type' : book.fileType ,
        'Content-Disposition' : `attachment; filename="${book.booktitle}.pdf"`
    })

    res.send(book.data);
} catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
}
})

app.listen(5000 , ()=>{
    console.log(`Server listening on port 5000`);
    
})
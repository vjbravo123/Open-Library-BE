import mongoose from "mongoose";

const ConnectDB = async (uri) =>{
    try {
        const conn = await mongoose.connect(uri);
        console.log(`Mongodb Connected :`,conn.connection.host);
        
    } catch (error) {
        console.error(`Erorr while connecting with db :`,error);
    }
}

export default ConnectDB;
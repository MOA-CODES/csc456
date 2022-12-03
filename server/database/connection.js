const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb connection string
        const con = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.1zjihei.mongodb.net/CSC456project?retryWrites=true&w=majority")

        console.log(`MongoDB connected:${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
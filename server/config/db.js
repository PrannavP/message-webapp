const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/chat-app");

        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
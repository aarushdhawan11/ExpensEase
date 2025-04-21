const mongoose = require("mongoose");

const db = async () =>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://aakasshhh:^vvrulc2q@noteapp.pxzl6.mongodb.net/?retryWrites=true&w=majority&appName=Noteapp")
        console.log("Database Connected");
    } catch(error){
        console.log("Database Connection Error");
    }

}

module.exports = {db}
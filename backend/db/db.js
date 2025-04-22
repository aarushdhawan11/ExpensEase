const mongoose = require("mongoose");

const db = async () => {
    try {
        mongoose.set('strictQuery', false);

        // Adding options for connection
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increased timeout to 30 seconds
            socketTimeoutMS: 45000 // Set socket timeout to 45 seconds
        };

        await mongoose.connect("mongodb+srv://aarushdhawan25:^vvrulc2q@cluster0.qkesk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", options);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
};

module.exports = { db };

const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Database Successfully Created");
    } catch (error) {
        console.log("Not able to connect to the mongoDB server");
        console.log(error);
    }
}

module.exports = connectDB;
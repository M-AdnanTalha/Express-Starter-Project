const express = require('express');
const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.listen(ServerConfig.PORT , async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}!!!`);
});



//P5JmuB2ajLhnwMGL
//adnanad7077


//mongodb+srv://adnanad7077:P5JmuB2ajLhnwMGL@cluster0.jbvnv07.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
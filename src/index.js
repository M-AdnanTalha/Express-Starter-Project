const express = require('express');
//const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');


const app = express();

//CHECK FROM HERE 1:23:00
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
})

app.listen(ServerConfig.PORT , async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}!!!`);
});



//P5JmuB2ajLhnwMGL
//adnanad7077


//mongodb+srv://adnanad7077:P5JmuB2ajLhnwMGL@cluster0.jbvnv07.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
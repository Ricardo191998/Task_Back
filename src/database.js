const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/taskapp",
    {useNewUrlParser: true, })
    .then(()=>{
        console.log("Database is connected");
    })
    .catch((error)=>{
        console.log("Error whit database");
    });

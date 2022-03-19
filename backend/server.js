const express = require("express");

const app = express();
app.get("/",(req,res) =>{
    res.send("API is running..");
})

app.listen(4000,console.log("Server started on Port 4000."));
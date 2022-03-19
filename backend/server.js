const express = require("express");
// const notes = require("./data/mock_data")
const notes = require("./data/MOCK_DATA.json");

const app = express();

app.get("/",(req,res) =>{
    res.send("API is running..");
})

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.listen(4000,console.log("Server started on Port 4000."));
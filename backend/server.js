const express = require("express");
const notes = require("./data/mock_data")
// const notes = require("./data/MOCK_DATA.json");

const app = express();

app.get("/",(req,res) =>{
    res.send("API is running..");
})

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.get("/api/notes/:id/:id2",(req,res)=>{
    const note = notes.find((n) => n._id === req.params.id);
    console.log(req.params);
})

app.listen(4000,console.log("Server started on Port 4000."));
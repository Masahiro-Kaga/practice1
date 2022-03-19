const express = require("express");
const notes = require("./data/mock_data")
// const notes = require("./data/MOCK_DATA.json");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get("/",(req,res) =>{
    res.send("API is running..");
})

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})

const PORT = process.env.PORT;

app.listen(PORT,console.log(`Server started on Port ${PORT}.`));
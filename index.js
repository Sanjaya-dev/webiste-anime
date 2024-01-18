import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

// const API_URL = "https://api.jikan.moe/v4/anime/";

app.get("/",async (req,res) => {
    // const randomId = Math.floor(Math.random() * 100);
    // const respon = await axios.get(API_URL + randomId);
    // const result = respon.data;

    res.render("index.ejs");
    
});

app.listen(port,()=>{
    console.log("server run in port: ",port);
});
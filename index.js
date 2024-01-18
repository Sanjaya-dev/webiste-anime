import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://api.jikan.moe/v4/anime/";

app.listen(port,()=>{
    console.log("server run in port: ",port);
})
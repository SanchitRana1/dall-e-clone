import * as dotenv from "dotenv";
import express from "express";
import OpenAI from 'openai';

dotenv.config()
const router = express.Router();

router.route("/",(req,res)=>{
    res.send("Request from DALL-E")
})
const postRoutes = ()=>{}

export default router;


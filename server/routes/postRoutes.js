import * as dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";
import { v2 as cloudinary } from "cloudinary";
import { Post } from "../mongodb/models/postModel.js";
import fetch from 'node-fetch';
dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.route("/")
  .get(async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(202).json({ success: true, data: posts });
    } catch (error) {
        
      res.status(500).json({ success: false, error: error });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoURL = await cloudinary.uploader.upload(photo);
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoURL?.url,
      });
      res.status(202).json({ success: true, data: newPost });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  });

  router.route("/download").get(async (req, res) => {
    // const { url } = req.query;
    // try {
    //   const response = await fetch(url, { responseType: 'arraybuffer' });
    //   res.set('Content-Type', response.headers['content-type']);
    //   res.status(200).json(response.data);
    // } catch (error) {
    //   res.status(500).send('Error fetching the image');
    // }
    const { url } = req.query;
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch the image');
      }
  
      const contentType = response.headers.get('content-type');
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      res.set('Content-Type', contentType);
      res.send(buffer);
    } catch (error) {
      console.error('Error fetching the image:', error);
      res.status(500).send('Error fetching the image');
    }
  });

export default router;

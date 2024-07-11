import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dallERoutes from "./routes/dallERoutes.js";


const app = express();
app.use(express.json()); // whenever accepting json data from user
app.use(cors());
dotenv.config(); //get variables from .env file


app.use("/api/v1/post",postRoutes)
app.use("/api/v1/dall-e",dallERoutes)

app.get("/", (req, res) => {
  res.send("Hello from Dall-e");
});

const PORT = process.env.PORT || 5000
try {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

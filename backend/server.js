import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";

const app = express()
const port = 3000;
connectDB();



app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
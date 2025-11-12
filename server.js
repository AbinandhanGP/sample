import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.post("/sample",(req,res) => {
    res.send(200);
})

app.listen(port,() => {
    console.log(`Server started on port ${port}...`);
})
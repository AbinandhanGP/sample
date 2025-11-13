import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.post("/sample",(req,res) => {
    const name = req.body.name;
    const password = req.body.password;
    if(password == "abc") {
        res.status(200).json({
            status:"succesful"
        })
    }else res.send(400);
})

app.listen(port,() => {
    console.log(`Server started on port ${port}...`);
})
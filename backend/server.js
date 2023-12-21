import express from "express"
import ConnectDb from "./utils/ConnectDb.js";
import dotenv from "dotenv"

const app = express();

//configurations    
dotenv.config();
ConnectDb();
//routes
app.use('/api/v1/user',(req,res,next)=>{
    res.send("hello bor")
})
const port = process.env.PORT || 4500

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
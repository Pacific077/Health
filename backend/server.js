import express from "express"
import ConnectDb from "./utils/ConnectDb.js";
import dotenv from "dotenv"
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
const app = express();

//configurations    
dotenv.config();
ConnectDb();

//middlewares
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/api/v1/user',UserRoute)

const port = process.env.PORT || 4500

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
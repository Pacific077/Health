import express from "express"
import ConnectDb from "./utils/ConnectDb.js";
import dotenv from "dotenv"
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
import AdminRoutes from "./Routes/AdminRoutes.js";
import DoctorRoute from "./Routes/DoctorRoutes.js";
const app = express();

//configurations    
dotenv.config();
ConnectDb();

//middlewares
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/api/v1/user',UserRoute)
app.use('/api/v1/admin',AdminRoutes)
app.use('/api/v1/doctor',DoctorRoute)

const port = process.env.PORT || 4500

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
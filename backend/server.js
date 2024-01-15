import express from "express";
import ConnectDb from "./utils/ConnectDb.js";
import dotenv from "dotenv";
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
import AdminRoutes from "./Routes/AdminRoutes.js";
import DoctorRoute from "./Routes/DoctorRoutes.js";
import cors from "cors";
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();

//configurations
dotenv.config();
ConnectDb();

//middlewares
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

//routes
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/doctor", DoctorRoute);
//deploymemt
//-------------------------------------------------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, 'frontend', 'build');

console.log("bpth",buildPath)
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


//-------------------------------------------------------------------------
const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
//change cors before hosting

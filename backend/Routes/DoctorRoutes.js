import express from "express"
import { getALlDoctors } from "../controllers/Doctor/DoctorControllor.js"
const DoctorRoute = express.Router()

DoctorRoute.get('/all',getALlDoctors)

export default DoctorRoute
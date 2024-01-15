import express from "express"
import { DoctorProfile, RejectAppointmentRequest, acceptAppointmentRequest, getALlDoctors } from "../controllers/Doctor/DoctorControllor.js"
import IsAuthenticated from "../Middlewares/Isauthenticated.js"
import handlePrediction from "../controllers/Predict.js"
const DoctorRoute = express.Router()

DoctorRoute.get('/all',getALlDoctors)
DoctorRoute.post('/profile',DoctorProfile)
DoctorRoute.post('/predict',handlePrediction)
DoctorRoute.post('/acceptAppointment/:id',IsAuthenticated,acceptAppointmentRequest)
DoctorRoute.post('/rejectAppointmet/:id',IsAuthenticated,RejectAppointmentRequest)

export default DoctorRoute
import express from "express"
import { RejectAppointmentRequest, acceptAppointmentRequest, getALlDoctors } from "../controllers/Doctor/DoctorControllor.js"
import IsAuthenticated from "../Middlewares/Isauthenticated.js"
const DoctorRoute = express.Router()

DoctorRoute.get('/all',getALlDoctors)
DoctorRoute.post('/acceptAppointment/:id',IsAuthenticated,acceptAppointmentRequest)
DoctorRoute.post('/rejectAppointmet/:id',IsAuthenticated,RejectAppointmentRequest)

export default DoctorRoute
import express from "express"
import IsAdmin from '../Middlewares/Isadmin.js';
import { AccptDoctorReq, RejectDrRqst } from '../controllers/Admin/AdminRoutes.js';
import IsAuthenticated from "../Middlewares/Isauthenticated.js";


const AdminRoutes = express.Router()
AdminRoutes.post('/accpt/:id',IsAuthenticated,IsAdmin,AccptDoctorReq);
AdminRoutes.post('/reject/:id',IsAuthenticated,IsAdmin,RejectDrRqst);

export default AdminRoutes
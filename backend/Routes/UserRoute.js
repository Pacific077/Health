import express from 'express';
import { Appointmentreq, GetAllAppointments, GetAllNotifiaction, LoginUser, Logout, MarkAllread, ProfilpicUpload, RegisterUser, SendDoctorReq, UserProfile, getMatchedAppointments } from '../controllers/User/UserControllers.js';
import IsAuthenticated from '../Middlewares/Isauthenticated.js';
import signupValidators from '../validators/RegisterValidator.js';
import LoginValidators from '../validators/LoginValidators.js';
import storage from '../config/cloudinary.js';
import multer from 'multer';
import doctorReqValidator from '../validators/DoctorReq.js';
const UserRoute = express.Router();

//insatnce of multer
const upload = multer({storage});


UserRoute.post('/register',signupValidators,RegisterUser);
UserRoute.post('/login',LoginValidators,LoginUser);
UserRoute.get('/profile',IsAuthenticated,UserProfile);
UserRoute.get('/allRead',IsAuthenticated,MarkAllread);
UserRoute.post('/sendreq',IsAuthenticated,doctorReqValidator,SendDoctorReq);
UserRoute.put("/profile-photo-upload" , IsAuthenticated ,upload.single('profile') ,ProfilpicUpload);
UserRoute.get('/notification',IsAuthenticated,GetAllNotifiaction);
UserRoute.get('/matched',IsAuthenticated,getMatchedAppointments);
UserRoute.get('/allappointments',IsAuthenticated,GetAllAppointments);
UserRoute.post('/logout',IsAuthenticated,Logout);
UserRoute.post('/appointmentReq/:id',IsAuthenticated,Appointmentreq);

export default UserRoute;

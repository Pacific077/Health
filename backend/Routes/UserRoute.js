import express from 'express';
import { Appointmentreq, GetAllNotifiaction, LoginUser, RegisterUser, SendDoctorReq, UserProfile } from '../controllers/User/UserControllers.js';
import IsAuthenticated from '../Middlewares/Isauthenticated.js';


const UserRoute = express.Router();

UserRoute.post('/register',RegisterUser);
UserRoute.post('/login',LoginUser);
UserRoute.get('/profile',IsAuthenticated,UserProfile);
UserRoute.post('/sendreq',IsAuthenticated,SendDoctorReq);
UserRoute.get('/notification',IsAuthenticated,GetAllNotifiaction);
UserRoute.post('/appointmentReq/:id',IsAuthenticated,Appointmentreq);

export default UserRoute;

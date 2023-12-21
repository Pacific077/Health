import express from 'express';
import { LoginUser, RegisterUser, UserProfile } from '../controllers/User/UserControllers.js';
import IsAuthenticated from '../Middlewares/Isauthenticated.js';

const UserRoute = express.Router();

UserRoute.post('/register',RegisterUser);
UserRoute.post('/login',LoginUser);
UserRoute.get('/profile',IsAuthenticated,UserProfile);

export default UserRoute;

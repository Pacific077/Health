import express from 'express';
import { RegisterUser } from '../controllers/User/UserControllers';

const UserRoute = express.Router();

UserRoute.post('/register',RegisterUser)
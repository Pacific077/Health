import Appointment from "../../models/Appointments/Appointment.js";
import Doctor from "../../models/Doctor/DoctorModel.js";
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

//register user
const RegisterUser = async (req, res) => {
try {
  const errs = validationResult(req);
  if(!errs.isEmpty()){
    let arr = [];
    errs.array().forEach((error) => {
      arr.push(error.msg);
    });
    return res.status(400).json({
      message:"Somethin went wrong",
      err:arr
    })
  }
  const { name, email, password } = req.body;
  //hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    name,
    email,
    password: hashedPass,
  });
  await newUser.save();
  res.json({
    success: true,
    message: "user registerd",
    data: newUser,
  });
} catch (error) {
  res.status(500).json({
    message:error.message
  })
}

};

//login user
const LoginUser = async (req, res) => {

  try {
  const errs = validationResult(req);
  if(!errs.isEmpty()){
    let arr = [];
    errs.array().forEach((error) => {
      arr.push(error.msg);
    });
    return res.status(400).json({
      message:"Somethin went wrong",
      err:arr
    })
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Invalid User",
    });
  }
  //check valid password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid Pass",
    });
  }
  //genarate jwt
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  //send token to cookie (http only:deny user to acces cookie from client side : it can only be accesed via http)
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  //send the response
  res.json({
    status: "success",
    message: "logged in",
    data: user,
  });
    
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }


};

//profile
const UserProfile = async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id).populate("appointments");
  if (user) {
    res.status(200).json({
      message: "user profile success",
      data: user,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};
//send Appointmetn req
const Appointmentreq = async (req, res) => {
  const doctorid = req.params.id;
  const { date, time } = req.body;

  const doctor = await User.findById(doctorid);

  if (!doctor) {
    return res.status(401).json({
      message: "No doctor found",
    });
  }
  const userId = req.user._id;
  const user = await User.findById(userId);
  const notification = await Notification.create({
    message: `${user.name} requested for your appointment on ${date} at ${time}`,
    notificationType: "request",
    senderId: userId,
    reciverId: doctorid,
  });
  const appointment = await Appointment.create({
    UserId: userId,
    DoctorId: doctorid,
    status: "pending",
    date,
    time,
  });
  await doctor.NewNotification.push(notification._id);
  await user.appointments.push(appointment._id);
  await doctor.appointments.push(appointment._id);
  await doctor.save();
  await user.save();
  res.status(200).json({
    message: "Appointment reqquest sent",
    data: doctor,
  });
};

//send Doctor req
//accppt do nothing in dr database just change the role
//reject delete dr from database

const SendDoctorReq = async (req, res) => {
  const errs = validationResult(req);
  if(!errs.isEmpty()){
    let arr = [];
    errs.array().forEach((error) => {
      arr.push(error.msg);
    });
    return res.status(400).json({
      message:"Somethin went wrong",
      err:arr
    })
  }
  const { name, email, Speciality, Fees,diseaseSpecialities } = req.body;
  const currentDate = new Date();

  const date = currentDate.toISOString().split('T')[0]; 
  const time = currentDate.toTimeString().split(' ')[0];

  const admin = await User.findById(process.env.ADMIN_ID);
  const data = {
    name,
    email,
    Speciality,
    Fees,
    diseaseSpecialities,
    date,
    time,
  };

  await Doctor.create({
    userId: req.user._id,
    name,
    email,
    status:"pending",
    Speciality,
    diseaseSpecialities,
    Fees,
  });
  const appointment = await Appointment.create({
    UserId: req.user._id,
    DoctorId: process.env.ADMIN_ID,
    status: "pending",
    date,
    time,
  });
  const notification = await Notification.create({
    message: `${name} requested for doctor acceptance`,
    notificationType: "adminApproval",
    senderId: req.user._id,
    reciverId: process.env.ADMIN_ID,
  });
  await admin.NewNotification.push(notification);
  await admin.appointments.push(appointment);
  await admin.save();
  res.status(200).json({
    message: "request sent success",
    data,
  });
};

//get all notifcation
const GetAllNotifiaction = async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId)
    .populate("NewNotification")
    .populate("seenNotification");
  if (!user) {
    res.status(401).json({
      message: "Inavlid User",
    });
  }
  const newNotifications = await user.NewNotification;
  const oldnotifcation = await user.seenNotification;
  res.status(200).json({
    message: "All NOtifcations",
    oldnotifcation,
    newNotifications,
  });
};

//mark all notifcation as read
//minor bug 
//reverse the array and then push it into the readNotification
const MarkAllread = async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(401).json({
      message: "Inavlid User",
    });
  }
  const newNotifications = await user.NewNotification;

  newNotifications.map(async (notif) => {
    await user.seenNotification.push(notif);
  });
  console.log("here");
  user.NewNotification = [];
  await user.save();
  res.status(200).json({
    message: "all read",
    user,
  });
};

//(reciverid === currentuser ) array in appointments array
const getMatchedAppointments = async (req, res) => {
  const userid = req.user._id;
  const user = await User.findById(userid).populate('appointments');
  const appointments = await user.appointments;
  const matchedAppointemnts = [];
  const uid = userid.toString()
  // console.log(uid)
  await appointments.forEach(async(appointment) => {
    const Drid =await appointment.DoctorId.toString();
    // console.log("drid",Drid)
    if (Drid === uid) {
      // console.log("hel")
      matchedAppointemnts.push(appointment);
    }
  });
  res.status(200).json({
    message: "fetched matched array",
    matchedAppointemnts,
  });
};

const GetAllAppointments = async (req,res)=>{
  const userid = req.user._id;
  const user = await User.findById(userid).populate({
    path: 'appointments',
    populate: {
      path: 'DoctorId',
      model:'user'
    },
  })
  ;
  const appointments = await user.appointments;
  res.status(200).json({
    message:"All Appointments",
    data:appointments
  })
}

const ProfilpicUpload = async(req,res)=>{
  try {
    if(!req.file){
      return res.status(400).json({
        msg:"no file found"
      })
    }
    //find user to be updated
    const UserId = req.user._id;
    const userFound = await User.findById(UserId);
    if (!userFound) {
      return res.status(400).json({
        err:"User not found"
      })
    }
    const updateduser = await User.findByIdAndUpdate(UserId, {
      profileImage: req.file.path,
    });
    res.status(200).json("Profile Pic Updated")
  } catch (Er) {
    res.status(400).json({
      err:Er
    })
  }
}

const Logout = async(req,res)=>{
  res.cookie("token", "", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({
    message : "Logged out!!"
  })
}
export {
  RegisterUser,
  LoginUser,
  UserProfile,
  SendDoctorReq,
  getMatchedAppointments,
  MarkAllread,
  Appointmentreq,
  GetAllNotifiaction,
  GetAllAppointments,ProfilpicUpload,Logout
};

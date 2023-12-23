import Appointment from "../../models/Appointments/Appointment.js"
import Doctor from "../../models/Doctor/DoctorModel.js"
import User from "../../models/User/UserModel.js"
import Notification from "../../models/notifications/NotficationModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//register user
const RegisterUser = async(req,res)=>{
    //all feilds req
  const { name, email, password } = req.body;
  if (!name || !email || !password) {

   return res.status(400).json({
        message:"All details required"
    });
  }
  //if already registerd
  const UserExists = await User.findOne({ email });
  if (UserExists) {
    return res.status(400).json({
        message:"User already Exists"
    });
  }
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
}

//login user
const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message:"All details required"
        });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            message:"Invalid User"
        });
    }
    //check valid password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({
            message:"Invalid Pass"
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
};

//profile
const UserProfile = async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id);
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
const Appointmentreq = async (req,res)=>{
  const doctorid =  req.params.id;
  const {date,time} =  req.body;
  const doctor = await Doctor.findById(doctorid);
  if(!doctor){
    return res.send(401).json({
      message:"No doctor found",
    })
  }
  const user = req.user;
  const notification = await Notification.create({
    message:`${user.name} requested for your appointment on ${date} at ${time}`,
    notificationType: 'request',
    senderId:user._id,
    reciverId:doctorid
  })
  const appointment = await Appointment.create({
    UserId:user._id,
    DoctorId:doctorid,
    status:"pending",
    date,
    time
  })
  await doctor.NewNotification.push(notification)
  await doctor.appointments.push(appointment);
  await doctor.save();
  res.status(200).json({
    message:"Appointment reqquest sent",
    data:doctor
  })
}


//send Doctor req
//accppt do nothing in dr database just change the role
//reject delete dr from database

const SendDoctorReq =async (req,res)=>{
  const {name,email,password,Speciality,Fees}= req.body
  const admin =await User.findById(process.env.ADMIN_ID);
  const data = {
    name,email,password,Speciality,Fees
  }
  await Doctor.create({
    userId:req.user._id,
    name,
    email,
    password,
    Speciality,
    Fees,
})
  const notification = await Notification.create({
    message:`${name} requested for doctor acceptance`,
    notificationType: 'adminApproval',
    senderId:req.user._id,
    reciverId:process.env.ADMIN_ID,

  })
 await admin.NewNotification.push(notification)
 await admin.save()
  res.status(200).json({
    message:"request sent success",
    data
  })
}
export {RegisterUser,LoginUser,UserProfile,SendDoctorReq,Appointmentreq}
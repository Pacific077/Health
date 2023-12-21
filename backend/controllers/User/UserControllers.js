import User from "../../models/User/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
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

//login
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
    res.status(404);
    throw new Error("User not found");
  }
};
export {RegisterUser,LoginUser,UserProfile}
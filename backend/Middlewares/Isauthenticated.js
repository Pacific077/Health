
import jwt from "jsonwebtoken"
import User from "../models/User/UserModel.js";
const IsAuthenticated = async (req,res,next)=>{
    if(req.cookies.token){
//verify the token
        const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        req.user =await User.findById(decoded.id).select("-password")
        return next();
    }else{
        return res.status(400).json({
            message:"Inavlid User!! please login" 
        })
    }
}

export default IsAuthenticated;
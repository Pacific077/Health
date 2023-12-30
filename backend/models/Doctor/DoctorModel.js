import mongoose from "mongoose";

const DoctorSchema = mongoose.Schema(
  {
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    Speciality: {
      type: String,
      required: true,
    },
    Fees: {
      type: Number,
      required: true,
    },
    status:{
      type:String,
      required: true,
      enum:["pending","approved"]
    }
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;

import { body } from "express-validator";


const doctorReqValidator = [
  body("name").notEmpty().withMessage("Name field is required"),
  body("Speciality").notEmpty().withMessage("Speciality field is required"),
  body("Fees").notEmpty().withMessage("Fees field is required"),
  body("email")
    .notEmpty()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Invalid email format")
];

export default doctorReqValidator;

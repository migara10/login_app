import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { userName, password, email, profile } = req.body;

    // Check if username already exists
    const existUserName = UserModel.findOne({ userName }).exec();

    // Check if email already exists
    const existEmail = UserModel.findOne({ email }).exec();

    // Using Promise.all to wait for both checks
    Promise.all([existUserName, existEmail])
      .then(([existingUserName, existingEmail]) => {
        if (existingUserName) {
          throw new Error("User name is already Exist...!");
        }

        if (existingEmail) {
          throw new Error("Email is already Exist...!");
        }

        // Hash the password
        return bcrypt.hash(password, 10);
      })
      .then((hashPassword) => {
        const user = new UserModel({
          userName,
          password: hashPassword,
          email,
          profile: profile || "",
        });

        // Save the user
        return user.save();
      })
      .then(() => {
        res.status(201).send({ msg: "User Register Successful" });
      })
      .catch((error) => {
        res
          .status(500)
          .send({ error: error.message || "Internal Server Error" });
      });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  res.json({ ...req.body, ggg: "login route" });
};
const getUser = async (req, res) => {
  res.json({ ...req.body, ggg: "getUser route" });
};
const updateUser = async (req, res) => {
  res.json({ ...req.body, ggg: "updateUser route" });
};
const GenerateOTP = async (req, res) => {
  res.json({ ...req.body, ggg: "GenerateOTP route" });
};
const verifyOTP = async (req, res) => {
  res.json({ ...req.body, ggg: "verifyOTP route" });
};
const createResetSession = async (req, res) => {
  res.json({ ...req.body, ggg: "createResetSession route" });
};
const resetPassword = async (req, res) => {
  res.json({ ...req.body, ggg: "resetPassword route" });
};

export {
  register,
  login,
  getUser,
  updateUser,
  GenerateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};

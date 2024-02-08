import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "./../config.js";

// verify user
async function verifyUser(req, res, next) {
  try {
    const { userName } = req.method == "GET" ? req.query : req.body;
    let exist = await UserModel.findOne({ userName });
    if (!exist) return res.status(404).send({ error: "can't find user!" });
    next();
  } catch (error) {
    res.status(404).send({ error: "Authentication Error" });
  }
}

// check Username
async function checkExistUserName(userName) {
  try {
    const existingUser = await UserModel.findOne({ userName });
    return !!existingUser; // Return true if user exists, false otherwise
  } catch (error) {
    console.error("Error checking existence of username:", error);
    throw new Error("Error checking existence of username");
  }
}

// check email
async function checkExistEmail(email) {
  try {
    const existingUser = await UserModel.findOne({ email });
    return !!existingUser; // Return true if user exists, false otherwise
  } catch (error) {
    console.error("Error checking existence of email:", error);
    throw new Error("Error checking existence of email");
  }
}

const register = async (req, res) => {
  try {
    const { userName, password, email, profile } = req.body;

    // Check if the username already exists
    const isUserNameExist = await checkExistUserName(userName);
    if (isUserNameExist) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Check if the email already exists
    const isEmailExist = await checkExistEmail(email);
    if (isEmailExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password before saving it
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error("Error hashing password:", hashError);
      throw new Error("Error hashing password");
    }

    // Create a new user with the hashed password
    const newUser = new UserModel({
      userName,
      password: hashedPassword,
      email,
      profile: profile || "",
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    await UserModel.findOne({ userName })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((checkedPassword) => {
            if (!checkedPassword)
              return res.status(400).send({ error: "Don't have password...!" });

            // create jwt token
            const token = jwt.sign(
              {
                userId: user._id,
                userName: user.userName,
              },
              ENV.JWT_SECRET,
              { expiresIn: "24h" }
            );
            res.status(200).send({
              msg: "Login Successful",
              userName: user.userName,
              token,
            });
          })
          .catch((error) => {
            res.status(400).send({ error: "Password not match...!" });
          });
      })
      .catch((error) => {
        res.status(404).send({ error: "Username not found...!" });
      });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getUser = async (req, res) => {
  try {
    const { userName } = req.params;
    UserModel.findOne({ userName }).select('-password')
      .then((user) => {
        if (!user) {
          return res.status(404).send({ error: "User not found" });
        }
        return res.status(200).send({ user });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
      });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error " });
  }
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
  verifyUser,
};

import { Router } from "express";
import * as controller from './../controllers/appController.js'

const router = Router();

/* post method */

//register user
router.post("/register", controller.register);

//send the email
// router.post("/registerMail", );

//authenticate user
router.post("/authenticate", (req, res) => {
  res.end()
});

//login app
router.post("/login",controller.verifyUser, controller.login);

/* get method */

//user with user name
router.get("/user/:username", controller.getUser);

//generate random OTP
router.get("/generateOTP", controller.GenerateOTP);

//verify generated OTP
router.get("/verifyOTP", controller.verifyOTP);

// reset all the variables
router.get("/createResetSession", controller.createResetSession);

/* put method */

//is use to update the user profile
router.put("/updateUser", controller.updateUser);

//use to reset password
router.put("/resetPAssword", controller.resetPassword);

export default router;

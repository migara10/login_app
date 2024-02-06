import { Router } from "express";

const router = Router();

/* post method */

//register user
router.post("/register", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//send the email
router.post("/registerMail", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//authenticate user
router.post("/authenticate", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//login app
router.post("/login", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

/* get method */

//user with user name
router.get("/user/:username", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//generate random OTP
router.get("/generateOTP", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//verify generated OTP
router.get("/verifyOTP", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

// reset all the variables
router.get("/createResetSession", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

/* put method */

//is use to update the user profile
router.put("/updateUser", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

//use to reset password
router.put("/resetPAssword", (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
});

// router.route('/register').post((req,res) => res.json('mango'))

export default router;

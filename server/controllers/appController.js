const register = async (req, res) => {
  res.json({ ...req.body, ggg: "register route" });
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

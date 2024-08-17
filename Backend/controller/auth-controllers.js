import userModel from "../model/user-model.js";
const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    // const user = req.body;
    // const newUser = new userModel(user);
    if ([!userName, !email, !password].some((field) => field?.trim() === "")) {
      throw new Error(404, "All fields are required");
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { register };

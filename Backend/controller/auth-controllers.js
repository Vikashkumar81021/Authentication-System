import userModel from "../model/user-model.js";

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    // const user = req.body;
    // const newUser = new userModel(user);
    // if ([userName, email, password].some((field) => field?.trim() === "")) {
    //   throw new Error(404, "All fields are required");
    // }

    if ([userName, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists",
      });
    }
    const generateverificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const createUser = new userModel({ email, userName, password });
    await createUser.save();
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      createUser,
      generateverificationToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000,

      token: await createUser.generateToken(),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { register };

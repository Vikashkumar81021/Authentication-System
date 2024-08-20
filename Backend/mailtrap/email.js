import { mailTrapClient } from "../app.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const generateEmailVerification = async (
  email,
  generateVerificationToken
) => {
  const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Rohit Kumar",
  };

  const recipients = [
    {
      email: email,
    },
  ];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        generateVerificationToken
      ),
      category: "Email verification",
    });
    console.log("Email verification sent successfully", response);
  } catch (error) {
    console.log(`Error verification email: ${error}`);

    return {
      message: "Error sending verification email",
      success: false,
    };
  }
};

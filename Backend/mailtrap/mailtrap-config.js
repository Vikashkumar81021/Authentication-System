// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
// dotenv.config();
// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;
// if (process.env.MAILTRAP_TOKEN) {
//   console.log("MAILTRAP_TOKEN loaded successfully");
// } else {
//   console.error("MAILTRAP_TOKEN is not defined");
// }

// if (process.env.MAILTRAP_ENDPOINT) {
//   console.log("MAILTRAP_ENDPOINT loaded successfully");
// } else {
//   console.error("MAILTRAP_ENDPOINT is not defined");
// }

// const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

// const sender = {
//   email: "mailtrap@demomailtrap.com",
//   name: "Rohit Kumar",
// };
// const recipients = [
//   {
//     email: "vikashkumarsing679@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log)
//   .catch(console.error);

import nodemailer from "nodemailer";

let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //NOte: user and pass must be genuine
    user: "sunuwarsuman436@gmail.com",
    pass: "rmfh kzpy ewnh flmk",
  },
};

export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};

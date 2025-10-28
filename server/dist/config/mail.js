import nodemailer from "nodemailer";
// Create a test account or replace with real credentials.
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // <-- your app password
    },
});
export const sendEmail = async (to, subject, body) => {
    const message = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: body,
    };
    await transporter.sendMail(message);
};

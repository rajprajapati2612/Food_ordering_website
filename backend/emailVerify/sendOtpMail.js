import nodemailer from "nodemailer";

export const sendOtpMail = async(email,otp)=>{

    const transporter = nodemailer.createTransport({
      //  service:'gmail',
        host: "smtp-relay.brevo.com",
        port: 2525,
        secure: false,
        auth:{
           user: process.env.BREVO_SMTP_USER,
           pass: process.env.BREVO_SMTP_KEY,
        }
    })

    const mailConfigurations = {
        from:process.env.MAIL_USER,
        to: email,
        subject: 'Password reset OTP',
        html:`<p>Your OTP for password reset is: <br><b>${otp}</b>. It is valid for 10 minutes.</p>`
    }

    await transporter.sendMail(mailConfigurations);

}

import bcrypt from "bcryptjs";
import User from "@/models/userModel";
import nodemailer from "nodemailer"


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // transporter
        
        const hasedToken = await bcrypt.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hasedToken, verifyTokenExpiry: Date.now() + 360000 })

        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                
                    forgotPasswordToken: hasedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                
        })}


        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: "api", // firex 
                pass: "<YOUR_API_TOKEN>" // x
            }
        });

           const mailOptions = {
            from: 'uvpatel.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hasedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hasedToken}
            </p>`
        }


        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        throw new Error(error.message)
    }


}



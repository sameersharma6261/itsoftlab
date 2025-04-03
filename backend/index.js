require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Aapki Gmail
                pass: process.env.EMAIL_PASS  // App Password
            },
            tls: {
                rejectUnauthorized: false // ⚠️ Self-Signed Certificate Fix
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,  // 👈 Yahan fix email likho jisme sab kuch aayega
            subject: `New Contact Form Submission: ${subject}`,
            text: `👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📝 Message: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email send failed:", error);
        res.status(500).json({ success: false, message: "Email send failed." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

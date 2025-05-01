
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Multer config
const storage = multer.diskStorage({
  destination: (req, pdfBuffer, cb) => cb(null, "uploads/"),
  filename: (req, pdfBuffer, cb) =>
    cb(null, Date.now() + "-" + pdfBuffer.originalname),
});
const upload = multer({ storage: multer.memoryStorage() });

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Route
app.post("/send-email", upload.single("attachment"), async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const pdfBuffer = req.pdfBuffer ? req.pdfBuffer.buffer : null;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `👤 Name: ${name}
            📧 Email: ${email}
            📞 Phone: ${phone}
              📝 Message: ${message}`,
              attachments: pdfBuffer
              ? [{ filename: req.pdfBuffer.originalname, content: pdfBuffer }]
              : [],
    };

   await transporter.sendMail(mailOptions);


    // Delete uploaded pdfBuffer after sending
    if (pdfBuffer && fs.existsSync(pdfBuffer.path)) {
      fs.unlinkSync(pdfBuffer?.path);
    }

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ success: false, message: "Email send failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
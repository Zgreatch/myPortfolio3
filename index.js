const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3000; // Choose a port number for your server

// Configure the necessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route to handle the email sending
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Define the email message
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully!' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

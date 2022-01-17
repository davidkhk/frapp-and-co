const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require("cors");
require('dotenv').config({ path: `${__dirname}/../../.env` });

// middleware
app.use(express.json());
app.use(cors());

const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENTID, process.env.SECRET, "https://developer.google.com/oauthplayground")
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const accessToken = oAuth2Client.getAccessToken()

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken
  },
 });
 
 transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });

 app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };
 
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
 });
 
 const port = 3001;
 app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
 });
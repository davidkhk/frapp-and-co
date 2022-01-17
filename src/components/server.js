const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

const { google } = require('googleapis');

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, "https://developer.google.com/oauthplayground")
oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN })

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: 'davidkhk@gmail',
      to: process.env.EMAIL,
      subject: 'TEST subject',
      text: 'TEST message',
      html: '<h1>TEST message</h1>',
    }

    const result = await transport.sendMail(mailOptions)
    return result

  } catch (error) {
    return error
  }
}

sendMail().then(result => console.log('Email is sent', result))
.catch(error => console.log(error.message));
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

let contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_WORD,
      clientId: process.env.REACT_APP_OAUTH_CLIENTID,
      clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.REACT_APP_OAUTH_REFRESH_TOKEN,
    }
   });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to Send');
    }
  });

  contactEmail.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

  router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: 'Contact Form Submission',
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: 'Oops! Alguma coisa deu errado. Por favor, tente novamente.' });
      } else {
        res.json({ status: `Obrigado, ${name}, pelo email!` });
      }
    });
  });
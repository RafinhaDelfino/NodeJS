var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rafael.delfino2006@gmail.com',
    pass: 'fxyu dtuo igbb hnrg'
  }
});

var mailOptions = {
  from: 'rafael.delfino2006@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Rafael Delfino 2B fxyu dtuo igbb hnrg'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
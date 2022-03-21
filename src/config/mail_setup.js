const nodemailer = require("nodemailer");

     let transporter = nodemailer.createTransport({

        host: "smtp.mailtrap.io",

        port: 587,

        secure: false, // true for 465, false for other ports

        auth: {
          user: "fb959c73c71852", // generated ethereal user
          pass: "496547dc5436b8", // generated ethereal password
        },

      });


module.exports = transporter;
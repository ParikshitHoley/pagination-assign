const transporter = require('../config/mail_setup')

const sendMailto = async({from,to,subject,text,html}) => {

    await transporter.sendMail({from,to,subject,text,html});
}

const confirmationEmail = async({from,to,user}) => {
    await sendMailto({
        from,
        to,
        subject:`Welcome to Niks system ${user.first_name} ${user.last_name}`,
        text:`Hi ${user.first_name}, Please confirm your email address`,
        html:`<h1>Hi ${user.first_name}, Please confirm your email address</h1><button>Verify</button>`
    });
};

const adminMail = async({to,user,}) => {
    await sendMailto({
        from:"niks@admin_gmail.com",
        to,
        subject:`${user.first_name} ${user.last_name} has registered with us.`,
        html:`<h1>Welcome ${user.first_name}</h1>`
    });
};


module.exports = {confirmationEmail,adminMail}
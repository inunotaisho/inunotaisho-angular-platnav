'use strict'
/*require(dotenv).config({ silent: true})*/
let express = require('express'),
    router = express.Router(),
    nodeMailer = require('nodemailer'),
    bcrypt = require('bcrypt'),
    ejs = require('ejs');

// create reusable transporter object using the default SMTP transport
router.post('/:email', (req, res, next) => {
    console.log('req shits', req.body);

    // let user = () => {
    //      User.findOne({ where: { email: req.params.email } })
    //     .then()
    //     }

    //      password = () => {
    //         if(){
    //             res.status(400).json({message: 'Creds not working'});
    //         } else {
    //             User.findOne({ where: { email: req.params.emailPassword } })
    //         }
    //     }

        let firstName = req.body.firstName,
            lastName = req.body.lastName,
            contactEmail = req.body.email;
    

    mailer = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: user,
        pass: password
        }
    });

    let mailOptions = {
        from: firstName + ' ' + lastName + ' ' + contactEmail,
        to: email,
        subject: req.body.subject,
        html: req.body.message
    };

    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('maybe err', error.mailOptions, '================', error);
            return;
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            console.log('reeeee', req.statusCode, 'vmnxvncvmnv', res.statusCode);
            res.send('<div class="alert alert--success row"><h4 class="col-xs-offset-5 col-xs-4 col-sm-offset-5 col-sm-4 col-md-offset-5 col-md-4" >Message sent!</h4></div>')
            mailer.close();
        };
    });
});

module.exports = router;
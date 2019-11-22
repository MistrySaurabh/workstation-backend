    class Mailer {
        constructor() {}

        async sendMail(to, template, subject) {
            //create transport to send mail
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'teacoderstack@gmail.com',
                    pass: 'SrMteacoderstackasdf1234$$$$'
                }
            });
            //define mail options
            var mailOptions = {
                from: 'Workstation <teacoderstack@gmail.com>',
                to: to, // receiver
                subject: subject, // Subject line
                html: template
            };
            // send mail with defined transport object
            let response = await transporter.sendMail(mailOptions);
            return response;
        }


        sendWelcomeMail(callback) {
            let subject = 'WORKSTATION : ACCOUNT CREATED';
        }

        sendVerifyAccountMail(callback) {
            let subject = 'WORKSTATION : VERIFY YOUR EMAIL ADDRESS';
        }

        sendForgotPasswordMail(to, to_name, reset_url, callback) {
            let subject = 'WORKSTATION : RESET PASSWORD';
            let parameters = {
                name: to_name,
                reset_url: reset_url
            };
            let html = ejs.render(fs.readFileSync(rootdir + `/views/emails/auth/forgotPassword.ejs`).toString(), parameters);
            this.sendMail(to, html, subject).then(data => { return callback(null, data) }).catch(error => { return callback(error, null) });
        }

        sendPasswordChangedMail(callback) {
            let subject = 'WORKSTATION : ACCOUNT PASSWORD CHANGED';
        }


        sendProjectCreatedMail(callback) {

        }

        sendProjectFilesAddedMail(callback) {

        }

        sendTaskCreatedMail(callback) {}

        sendTaskAssignedMail(callback) {}

        sendTaskUpdatedMail(callback) {}



    }

    module.exports = Mailer;
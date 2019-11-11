    class Mailer {
        constructor() {}

          async sendMail(to,template,subject,callback) {

                //create transport to send mail
                var transporter = nodemailer.createTransport({
                    service:'gmail',
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
               let response=await transporter.sendMail(mailOptions);
               return response;
        }

        sendWelcomeMail(callback){

        }

        
        sendForgotPasswordMail(to,to_name,reset_url,callback) {
            let subject='RESET PASSWORD';
            let parameters= {
                name: to_name,
                reset_url:reset_url
            };
            let _this=this;
            let html = ejs.render(fs.readFileSync(rootdir+`/views/emails/auth/forgotPassword.ejs`).toString(), parameters);
            _this.sendMail(to,html,subject).then(data=>{return callback(null,data)}).catch(error=>{return callback(error,null)});
        }

        sendProjectCreatedMail(callback) {

        }

        sendTaskAssignedMail(callback) {

        }

    }

    module.exports = Mailer;
module.exports = (req, res) => {
    try {
        const token = req.body.token;
        const password=req.body.password;
    
        Users.findOne({reset_token:token}).exec((user)=>{
            if(moment().unix()-user.reset_token_expires>0){
                return res.status(401).json({
                    errors:{
                        general:'This link has been expired , please try again forgot password to generate new link.'
                    }
                });
            }else{
                helpers.hash.getHash(password,(err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            status: "error",
                            message: "Internal Server Error",
                            errors: e
                        });
                    }
                    user.password=hash;
                    user.reset_token=null;
                    user.reset_token_expires=null;
                    user.save();
                    return res.status(200).json({
                        status:'success',
                        message:'Password successfully updated , please login to account .'
                    });
                });
            }
    
        });
    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}
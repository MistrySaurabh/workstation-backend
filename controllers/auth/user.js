module.exports=(req,res)=>{
    let user= req.user;
    return res.status(200).json(user);
}
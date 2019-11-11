module.exports = (req, res) => {
    let token=req.headers['authorization'].split(' ')[1];
    OAuthAccessToken.deleteOne({ access_token: token},(err)=>{
        return res.status(200).json({ status: 'success', message: 'Logout Successfully' });
    });
}
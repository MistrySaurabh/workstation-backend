module.exports = (req, res) => {
    try {
        Notifications.remove({ notifiable_id: req.user._id }).then((result)=>{
            if(result.deletedCount>0){
                return res.status(200).json({status:'success',message:'Notifications successfully deleted'})
            }else{
                return res.status(200).json({status:'error',message:'Failed to delete notifications'})
            }
       })
    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}
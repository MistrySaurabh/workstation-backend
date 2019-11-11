module.exports = (req, res) => {
   
       Comments.remove({ _id: req.params.comment_id }).then((result)=>{
            if(res.deletedCount>0){
                return res.status(200).json({status:'success',message:'comment successfully deleted'})
            }else{
                return res.status(200).json({status:'error',message:'failed to delete comment'})
            }
       }).catch((e)=>{
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
       });
}
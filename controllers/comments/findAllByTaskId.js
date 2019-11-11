module.exports = (req, res) => {
    
    var perPage = Math.max(10, req.query.limit),
    page = Math.max(0, req.query.page)

    Comments.find({
            project_id:req.params.project_id,
            task_id:req.params.task_id,
        })
        .limit(perPage)
        .skip(perPage * page)
        .sort({
            created_at: 'desc'
        })
        .exec(function(err, comments) {
            Comments.count().exec(function(err, count) {
                let result;
                result.docs=comments;
                result.total=count;
                result.currentPage=page;
                result.perPage=pageSize; 
                result.lastPage = Math.max(parseInt(Math.ceil(result.total/pageSize)),1);
                result.hasMorePages =  result.currentPage<result.lastPage? true :false; 
                result.nextPage =  result.currentPage<result.lastPage? result.currentPage+1:0;
                result.previousPage =  result.currentPage>1? result.currentPage-1:0;
            })
        })
}
module.exports = (req, res) => {

    var limit = req.query.limit ? parseInt(req.query.limit) : 10,
        page = req.query.page ? parseInt(req.query.page) : 1,
        populate = {
            path: 'user_id',
            select: '_id name avatar'
        },
        sort = {
            created_at: 'desc'
        };

    Comments.paginate({}, { page, limit, populate, sort }).then(result => {
        return res.status(200).json({
            status: "success",
            result: result
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: err
        });
    });
    /*   let formatted = helpers.paginate.getPaginateOptions(page, limit);

      Comments.find({
              project_id: req.params.project_id,
              task_id: req.params.task_id,
          })
          .populate({
              path: 'user_id',
              select: '_id name avatar'
          })
          .lean(true)
          .limit(limit)
          .skip(limit * formatted.page)
          .sort({
              created_at: 'desc'
          })
          .exec()
          .then(comments => {
              Comments.countDocuments().exec(function(err, count) {

                  let result = helpers.paginate.getPaginatedResult(comments, count, page, limit);

                  return res.status(200).json({
                      status: "success",
                      result: result
                  });
              })
          }).catch(err => {
              return res.status(500).json({
                  status: "error",
                  message: "Internal Server Error",
                  errors: err
              });
          }) */
}
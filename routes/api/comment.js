const router = express.Router();

router.post('/create', controllers.comments.create);
router.post('/update', controllers.comments.update);
router.get('/all/:project_id/task/:task_id', controllers.comments.findAllByTaskId);
router.delete('/delete/:comment_id',controllers.comments.delete);

module.exports = router
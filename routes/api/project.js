const router = express.Router();

router.post('/create', controllers.project.create);
router.get('/all', controllers.project.findAll);
router.get('/view/:project_id', controllers.project.findOne);
router.post('/update/:project_id', controllers.project.update);
router.delete('/delete/:project_id', controllers.project.delete);


router.get('/:project_id/task/all', controllers.task.findAllByProjectId);
router.post('/:project_id/task/create', controllers.task.create);
router.get('/:project_id/task/view/:task_id', controllers.task.findOne);
router.post('/:project_id/task/update/:task_id', controllers.task.update);
router.delete('/:project_id/task/delete/:task_id', controllers.task.delete);

module.exports = router
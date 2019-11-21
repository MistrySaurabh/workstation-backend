const router = express.Router();

router.post('/create', controllers.project.create);
router.get('/all', controllers.project.findAll);
router.get('/view/:project_id', controllers.project.findOne);
router.post('/update/:project_id', controllers.project.update);
router.delete('/delete/:project_id', controllers.project.delete);

module.exports = router
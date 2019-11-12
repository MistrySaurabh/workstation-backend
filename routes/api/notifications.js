const router = express.Router();

router.post('/markAsRead', controllers.notifications.markAsRead);
router.get('/all', controllers.notifications.all);
router.delete('/delete',controllers.notifications.delete);

module.exports = router
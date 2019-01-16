const router = require('express').Router();
const customerControllers = require('../controllers/customerController');

router.get('/', customerControllers.list);
router.post('/add', customerControllers.save);
router.get('/delete/:id', customerControllers.delete);
router.get('/edit/:id', customerControllers.edit);
router.post('/update/:id', customerControllers.update);

module.exports = router;

const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController'); 

router.get('/', userController.getHome);

router.post('/', userController.postHome)

module.exports = router;
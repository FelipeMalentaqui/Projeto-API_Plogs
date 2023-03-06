const express = require('express');

const { loginController } = require('../controllers');
const validadeLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.get('/', loginController.getAll);
router.post('/', validadeLogin, loginController.login);

module.exports = router;
const express = require('express');

const { loginController } = require('../controllers');
const validadeLogin = require('../middlewares/validateLogin');
// const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.get('/', loginController.getAll);
router.post('/', validadeLogin, loginController.login);
// router.post('/', validadeLogin, loginController.criandoToken);

module.exports = router;
const express = require('express');
const { userController } = require('../controllers');
// const validateToken = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userController.createdUser);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);

module.exports = router;
const express = require('express');
const { postController } = require('../controllers');
// const validateCategories = require('../middlewares/validateCategories');
const validateToken = require('../auth/validateJWT');

const router = express.Router();

// router.post('/', postController.createPost);
router.get('/', validateToken, postController.getAll);
router.get('/:id', validateToken, postController.getById);

module.exports = router;
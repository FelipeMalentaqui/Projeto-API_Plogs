const express = require('express');
const { categoriesController } = require('../controllers');
// const validateCategories = require('../middlewares/validateCategories');
// const validateToken = require('../auth/validateJWT');

const router = express.Router();

router.post('/', categoriesController.createPost);
router.get('/', categoriesController.getAll);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');
const likeCtrl = require('../controllers/like');




router.post('/', auth, multer, saucesCtrl.createSauces);
router.put('/:id', auth, multer, saucesCtrl.modifySauces);
router.delete('/:id', auth, saucesCtrl.deleteSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/:id/like', auth, multer, likeCtrl.likeSauces);

// router.get('/', auth, saucesCtrl.getAllSauces);
// router.post('/', auth, multer, saucesCtrl.likeSauces);
// router.post('/:id/like', auth, multer, saucesCtrl.createSauces);

// router.get('/:id', auth, saucesCtrl.getOneSauces);
// router.put('/:id', auth, multer, saucesCtrl.modifySauces);
// router.delete('/:id', auth, saucesCtrl.deleteSauces);

module.exports = router;
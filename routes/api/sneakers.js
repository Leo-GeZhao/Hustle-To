const express = require('express');
const router = express.Router();

const sneakersCtrl = require('../../controllers/api/sneakers');

router.post('/', sneakersCtrl.create);
router.get('/allSneakers', sneakersCtrl.index)

module.exports = router;
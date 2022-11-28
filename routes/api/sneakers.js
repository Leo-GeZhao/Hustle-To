const express = require('express');
const router = express.Router();

const sneakersCtrl = require('../../controllers/api/sneakers');

router.post('/', sneakersCtrl.create);
router.get('/sneakers', sneakersCtrl.index)
router.get('/sneakers/:sneakerName',sneakersCtrl.show)
router.delete('/sneakers/:sneakerName', sneakersCtrl.delete)

module.exports = router;
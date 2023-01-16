const express = require('express');
const router = express.Router();
const multer_S3 = require('../../config/multer_S3');

const sneakersCtrl = require('../../controllers/api/sneakers');

router.post('/', multer_S3.upload.single('image'), sneakersCtrl.create);
router.get('/sneakers', sneakersCtrl.index)
router.get('/sneakers/:sneakerName',sneakersCtrl.show)
router.delete('/sneakers/:sneakerName', sneakersCtrl.delete)
router.put('/sneakers/:sneakerName', sneakersCtrl.edit)
router.post('/sneakers/:sneakerName/variant',sneakersCtrl.add)

module.exports = router;
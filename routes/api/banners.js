const express = require('express');
const router = express.Router();
const multer_S3 = require('../../config/multer_S3')

const bannerCtrl = require('../../controllers/api/banners')

router.post('/',multer_S3.upload.single('image'), bannerCtrl.create)
// router.post('/', bannerCtrl.create)

module.exports = router;
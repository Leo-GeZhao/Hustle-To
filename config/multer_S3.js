const multer  = require('multer')
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3')


const s3 = new S3Client({
    credentials: {
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      region: 'us-east-1',
    }
})

const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:'hustleto-leozhao',
        contentType:multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },
          key: function (req, file, cb) {
            const newFileName = Date.now().toString();
            cb(null, newFileName)
          },
    }),
    
    if(err) {
        console.log(err)}
})

module.exports = {
    upload
}
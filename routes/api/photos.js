const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
})

router.post("/", upload.single("file"), (req, res) => {
    const bucket = {
        Bucket: '',
        key: req.file.originalName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        ACL: 'public-read'
    }

    s3.upload(bucket, function(err, data){
        if(err) return res.sendStatus(500);

        console.log(data);
        res.sendStatus(200);
    })

})

module.exports = router;
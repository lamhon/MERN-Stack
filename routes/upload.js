const router = require('express').Router();
const cloudinary = require('cloudinary');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Upload image
router.post('/upload',auth, authAdmin, (req, res) => {
    try {
        console.log(req.files);
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: 'No files were uploaded' });
        }

        const file = req.files.file;
        if (file.size > 1024 * 1024) { // If file size > 1 MB
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: 'Size too large' });
        }

        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: 'File format incorrect' });
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "Sorr" }, async (err, result) => {
            if (err) throw err;

            removeTmp(file.tempFilePath);

            res.json({ public_id: result.public_id, url: result.secure_url });
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

//Delete image
router.post('/destroy',auth, authAdmin, (req, res) => {
    try {
        const {public_id} = req.body;
        if(!public_id) {
            res.status(500).json({msg: "No image selected"});
        }
        cloudinary.v2.uploader.destroy(public_id, async(err, result)=>{
            if(err) throw err;

            res.json({msg: "Deleted image"});
        })
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
})

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    })
}

module.exports = router
"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const multer = require('multer');
const path = require('path');
const uuid = require('uuid').v4;


// destination dir
const storage = multer.diskStorage({

    destination: (req, res, next) => {
        if (file.fieldname === 'video') {
            const rootDir = path.dirname(require.main.filename);
            next(null, path.join(rootDir, 'public').concat('videos'))
        }
    },

    filename: (req, res, next) => {
        const videoExt = file.mimetype.split('/')[1]
        const id = uuid()
        next(null, "video_" + id + '.' + videoExt)
    }

})

const fileFilter = (req, res, next) => {
    if (file.mimetype === 'video/mp4') {
        next(null, true)
    } else {
        next(null, false)
    }
}

exports.videoUpload = multer({storage, fileFilter})
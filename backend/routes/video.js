"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const router = require('express').Router()
const { videoUpload } = require('../middlewares/videoUpload')

router.post('/upload', videoUpload.single('video'), 
    (req, res) => {
        res.send({message: 'Video Uploaded'})
})

module.exports = router
"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const router = require('express').Router()
const { videoUpload } = require('../middlewares/videoUpload')

router.post('/upload', videoUpload.single('video'))

module.exports = router
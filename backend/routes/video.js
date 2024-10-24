"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const router = require('express').Router()
const { addVideo, getAllVideos } = require('../controllers/video')
const { videoUpload } = require('../middlewares/videoUpload')
 
router.post('/upload', videoUpload.single('video'), addVideo)
      .get('/videos', getAllVideos)

module.exports = router
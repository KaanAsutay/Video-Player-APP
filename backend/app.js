"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/dbConnect');
const { readdirSync } = require('fs');
const { route } = require('./routes/video.js');
const path = require('path');
 
require('dotenv').config()
/* ------------------------------------------------------- */
// Required Modules:

const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */
// Middlewares:

app.use(cors())

// Accept JSON:
app.use(express.json())

/* ------------------------------------------------------- */
// Routes:

readdirSync('./routes')
    .map((route) => 
        app.use('/api', require('./routes/' + route)))

/* ------------------------------------------------------- */
// Serve static files:

app.use('/public', express.static(path.join(__dirname, 'public')))

/* ------------------------------------------------------- */
// RUN SERVER:

const server = () => {
    dbConnection()
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`)
    })
}

server()
"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Video Player
------------------------------------------------------- */
const express = require('express');
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/dbConnect');

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
// RUN SERVER:

const server = () => {
    dbConnection()
    app.listen(PORT, () => {
        console.log(`Server is listening to ${PORT}`)
    })
}

server()
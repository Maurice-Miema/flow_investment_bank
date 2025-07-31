// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes de test (tu pourras les remplacer plus tard)
app.get('/', (req, res) => {
    res.send("Bienvenue sur le back-end de Flow Investment Bank 🚀");
});

module.exports = app;

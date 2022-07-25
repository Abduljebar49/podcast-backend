const express = require('express');
const { getSingleSura } = require('../components/podcast-components');
const router = express.Router();

router.get('/sura/:id',getSingleSura);

module.exports = {
    routes:router
}
const express = require('express');
const router = express.Router();

router.use('/pets', require('./pets'))
router.use('/owners', require('./owners'))

module.exports = router;

const express = require('express');
const router = express.Router();

const Pet = require('../models/Pet');

router.route('/')
  .get((req, res) => {
    Pet.findAll(res.handle)
  })

  .post((req, res) => {
    Pet.create(req.body, res.handle)
      .then((result) => Pet.findAll(res.handle))
  })

module.exports = router;

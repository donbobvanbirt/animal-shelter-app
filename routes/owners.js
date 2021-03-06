const express = require('express');
const router = express.Router();

const Owner = require('../models/Owner');

router.route('/pets/:name')
  .get((req, res) => {
    let { name } = req.params
    Owner.findPets(name, res.handle)
  })

router.route('/find/:name')
  .get((req, res) => {
    let { name } = req.params
    Owner.findOwner(name, res.handle)
  })

router.route('/')
  .get((req, res) => {
    Owner.findAll(res.handle)
  })

  .post((req, res) => {
    Owner.create(req.body, res.handle)
      .then((result) => Owner.findAll(res.handle))
  })

module.exports = router;

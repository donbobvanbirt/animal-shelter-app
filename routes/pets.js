const express = require('express');
const router = express.Router();

const Pet = require('../models/Pet');

router.use((req, res, next) => {
  res.handle = (err, data) => res.status( err ? 400 : 200).send(err || data)
  next()
})

router.route('/')
  .get((req, res) => {
    Pet.findAll(res.handle)

      // .then(owners => {
      //   res.send(owners);
      // })
      // .catch(err => {
      //   res.status(400).send(err);
      // })
  })

  .post((req, res) => {
    Pet.create(req.body)
      .then(Pet.findAll)
      .then(owners => {
        res.send(owners);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })

module.exports = router;

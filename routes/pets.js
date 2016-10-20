const express = require('express');
const router = express.Router();

const Pet = require('../models/Pet');

router.route('/unadopt/:pet')
  .put((req, res) => {
    Pet.unAdopt(req.params.pet, res.handle)
  })


router.route('/adopt')
  .put((req, res) => {
    Pet.adopt(req.body, res.handle)
  })

router.route('/owner/:petName')
  .get((req, res) => {
    let { petName } = req.params;
    Pet.findPetsOwner(petName, res.handle)
  })

router.route('/find/:petName')
  .get((req, res) => {
    let { petName } = req.params;
    Pet.findPet(petName, res.handle)
  })

router.route('/owner')
  .get((req, res) => {
    Pet.findOwners(res.handle)
  })

router.route('/findavailable')
  .get((req, res) => {
    Pet.findAvailablePets(res.handle)
  })

router.route('/')
  .get((req, res) => {
    Pet.findAll(res.handle)
  })

  .post((req, res) => {
    Pet.create(req.body, res.handle)
      .then((result) => Pet.findAll(res.handle))
  })

module.exports = router;

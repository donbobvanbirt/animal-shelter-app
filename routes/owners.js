const express = require('express');
const router = express.Router();

const Owner = require('../models/Owner');

router.route('/')
  .get((req, res) => {
    Owner.findAll()
      .then(owners => {
        res.send(owners);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })

  .post((req, res) => {
    Owner.create(req.body)
      .then(Owner.findAll)
      .then(owners => {
        res.send(owners);
      })
      .catch(err => {
        res.status(400).send(err);
      })
  })

// router.route('/:id')
//   .put((req, res) => {
//     Owner.update(req.params.id, req.body)
//       .then(Owner.findAll)
//       .then(owners => {
//         res.send(owners);
//       })
//       .catch(err => {
//         res.status(400).send(err);
//       })
//   })

module.exports = router;

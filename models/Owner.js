const db = require('../config/db');
const squel = require('squel');

const TABLE_NAME = 'Owners';

db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(80),
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err;
})

exports.findAll = (cb) => {
  // let sql = `SELECT * FROM ${TABLE_NAME}`;

  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Owners.name', 'Name')
                 .field('Owners.id', 'id')
                 .field('Pets.name', 'Pets')
                 .field('Pets.id', 'PetId')
                 .join('Pets', null, 'Owners.id = Pets.ownerId')
                 .toString();

  db.query(sql, (err, owners) => {
    if (err) return cb(err);
    cb(null, owners);
  });
}

exports.create = (owner, cb) => {
  return new Promise((res, rej) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(owner).toString();

    db.query(sql, (err, result) => {
      if (err) return cb(err);
      res(result);
    });
  });
}

exports.findPets = (name, cb) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Owners.name', 'Owner')
                 .field('Owners.id', 'id')
                 .field('Pets.name')
                 .field('Pets.type')
                 .join('Pets', null, 'Owners.id = Pets.ownerId')
                 .where(`Owners.name = '${name}'`)
                 .toString();
  db.query(sql, (err, pet) => {
    if (err) return cb(err);
    cb(null, pet);
  });
}

// exports.update = function(playerId, updateObj) {
//   return new Promise((resolve, reject) => {
//     let sql = squel.update().table(TABLE_NAME).setFields(updateObj).where(`id = ${playerId}`).toString();
//     db.query(sql, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// }

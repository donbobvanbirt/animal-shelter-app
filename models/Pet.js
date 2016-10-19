const db = require('../config/db');
const squel = require('squel');

const TABLE_NAME = 'Pets';

db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(80),
  ownerId INT,
  type VARCHAR(80),
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err;
})

exports.findAll = (cb) => {
  let sql = `SELECT * FROM ${TABLE_NAME}`;
  db.query(sql, (err, pets) => {
    if (err) return cb(err);
    cb(null, pets);
  });
}

exports.create = (pet, cb) => {
  return new Promise((res, rej) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(pet).toString();

    db.query(sql, (err, result) => {
      if (err) return cb(err);
      res(result);
    });
  });
}

exports.findOwners = (cb) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Pets.name')
                 .field('Pets.type')
                 .field('Owners.name', 'Owner')
                 .join('Owners', null, 'Pets.ownerId = Owners.id')
                 .toString();
  db.query(sql, (err, pets) => {
    if (err) return cb(err);
    cb(null, pets);
  });
}

exports.findPetsOwner = (name, cb) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Pets.name')
                 .field('Pets.type')
                 .field('Owners.name', 'Owner')
                 .join('Owners', null, 'Pets.ownerId = Owners.id')
                 .where(`Pets.name = '${name}'`)
                 .toString();
  db.query(sql, (err, pet) => {
    if (err) return cb(err);
    cb(null, pet);
  });
}

exports.findAvailablePets = (cb) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Pets.name')
                 .field('Pets.type')
                 .where('Pets.ownerId < 1')
                 .toString();
  db.query(sql, (err, pet) => {
    if (err) return cb(err);
    cb(null, pet);
  });
}

exports.adopt = (body, cb) => {
  let { owner, pet } = body;
  let sql = squel.update()
                 .table(TABLE_NAME)
                 .set('ownerId', owner)
                 .where(`id = ${pet}`)
                 .toString();
  db.query(sql, (err, p) => {
    if (err) return cb(err);
    cb(null, p);
  });
}

exports.unAdopt = (pet, cb) => {
  let sql = squel.update()
                 .table(TABLE_NAME)
                 .set('ownerId', 0)
                 .where(`id = ${pet}`)
                 .toString();
  db.query(sql, (err, p) => {
    if (err) return cb(err);
    cb(null, p);
  });
}

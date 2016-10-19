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

// exports.findAll = () => new Promise((resolve, reject) => {
//
//   let sql = `SELECT * FROM ${TABLE_NAME}`;
//
//   db.query(sql, (err, pets) => {
//     if (err) return reject(err);
//     resolve(pets);
//   });
// })
exports.findAll = (cb) => {
  let sql = `SELECT * FROM ${TABLE_NAME}`;
  db.query(sql, (err, pets) => {
    if (err) return cb(err);
    cb(null, pets);
  });
}

exports.create = function(pet) {
  return new Promise((resolve, refect) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(pet).toString();

    db.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

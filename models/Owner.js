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
  let sql = `SELECT * FROM ${TABLE_NAME}`;
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

// exports.update = function(playerId, updateObj) {
//   return new Promise((resolve, reject) => {
//     let sql = squel.update().table(TABLE_NAME).setFields(updateObj).where(`id = ${playerId}`).toString();
//     db.query(sql, (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// }

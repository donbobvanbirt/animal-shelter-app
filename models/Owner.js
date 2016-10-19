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

exports.findAll = () => new Promise((resolve, reject) => {

  // let sql = squel.select()
  //                .from(TABLE_NAME)
  //                .field('Owners.id', 'id')
  //                .field('Owners.name')
  //                .field('Teams.name', 'teamName')
  //                .join('Teams', null, 'Owners.teamId = Teams.id')
  //                .where('Owners.teamId = 1') // specify team. if not included, all teams will be shown
  //                .toString();

  let sql = `SELECT * FROM ${TABLE_NAME}`;

  db.query(sql, (err, owners) => {
    if (err) return reject(err);
    resolve(owners);
  });
})

exports.create = function(owner) {
  return new Promise((resolve, refect) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(owner).toString();

    db.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
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

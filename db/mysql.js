/**
 * @Author: langchenglai
 * @Date:   2018-04-23 19:01:21
 * @Email:  lclangcheng@gmail.com
 * @Filename: mysql.js
 * @Last modified by:   lclangcheng
 * @Last modified time: 2018-08-17 10:18:24
 * @License: jin10
 * @Copyright: jin10
 */
'use strict'

const config = require('config')
const MySQL = require('mysql2')

console.log(config.mysqlConfig)
const pool = MySQL.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'work',
  port: 3306
})
// const pool = MySQL.createPool(config.mysqlConfig)

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log('MySQL:', err)
        console.log(sql, values)
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

const heartbeat = async () => {
  try {
    await query('select 1')
  } catch (err) {
    console.log('heartbeat err', JSON.stringify(err))
  }
  setTimeout(heartbeat, 60 * 1000 * 10)
}
// heartbeat()

module.exports = {
  query,
  pool
}

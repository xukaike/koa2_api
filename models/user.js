const { query } = require('../db/mysql')
const table = 'userinfo'
const utils = require('../utils')

const newUser = (user) => {
  return query(`insert into ${table} (username,password,signup_time) values(?,?,?)`
    , [user.username, user.password, utils.dateGenerator()])
}

const updateToken = (value, username) => {
  return query(`update ${table} set token = ? where username = ?`
    , [value, username])
}

const updateDate = (value, username) => {
  return query(`update ${table} set last_login_time = ? where username = ?`
    , [value, username])
}

const findUser = (username) => {
  return query(`select password from ${table} where username = (?)`, [username])
}

module.exports = {
  newUser,
  updateToken,
  updateDate,
  findUser
}

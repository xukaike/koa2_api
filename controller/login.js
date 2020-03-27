const db = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('config')
const utils = require('../utils')

const login = async (user) => {
  if (!user.username || !user.password) {
    return {
      status: 401,
      message: '请输入用户名或密码'
    }
  }
  const res = await db.findUser(user.username)
  if (res.length == 0 || res[0].password != user.password) {
    return {
      status: 401,
      message: '用户名或密码有误'
    }
  } else {
    const token = jwt.sign({ name: user.name }, config.secret)
    db.updateToken(token, user.username)
    db.updateDate(utils.dateGenerator(), user.username)
    return {
      status: 200,
      message: '登陆成功',
      data: {
        token: token
      }
    }
  }
}

module.exports = {
  login
}

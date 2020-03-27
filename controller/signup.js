const db = require('../models/user')

const newUser = async (user) => {
  if (!user.username || !user.password) {
    return {
      status: 401,
      message: '请输入用户名或密码'
    }
  } else {
    try {
      await db.newUser(user)
      return {
        status: 200,
        message: '注册成功'
      }
    } catch (ER_DUP_ENTRY) {
      console.log(ER_DUP_ENTRY)
      return {
        status: 401,
        message: '用户已存在'
      }
    }
  }
}

module.exports = {
  newUser
}

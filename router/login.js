const router = require('koa-joi-router')
const login = router()
const Joi = router.Joi
const control = require('../controller/login')

login.route({
  method: 'post',
  path: '/login',
  validate: {
    body: {
      username: Joi.string(),
      password: Joi.string()
    },
    type: 'form'
  },
  handler: async (ctx, next) => {
    const user = ctx.request.body
    const res = await control.login(user)
    ctx.status = res.status
    ctx.body = res
  }
})

module.exports = login

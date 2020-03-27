const router = require('koa-joi-router')
const signup = router()
const Joi = router.Joi
const control = require('../controller/signup')

signup.route({
  method: 'post',
  path: '/signup',
  validate: {
    body: {
      username: Joi.string(),
      password: Joi.string()
    },
    type: 'form'
  },
  handler: async (ctx, next) => {
    const user = ctx.request.body
    const res = await control.newUser(user)
    ctx.status = res.status
    ctx.response.body = res
  }
})

module.exports = signup

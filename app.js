const Koa = require('koa')

const login = require('./router/login')
const signup = require('./router/signup')

const app = new Koa()

app.use(login.middleware())
app.use(signup.middleware())
app.listen(3000)

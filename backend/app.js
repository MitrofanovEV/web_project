const express = require('express')
const session = require('express-session')
const path = require('path')
const userInViews = require('./lib/middleware/userInViews')
const passport = require('./config/passport')

const frontendPath = path.join(__dirname, '../frontend', '/build')
const port = 8080

const app = express()

const sess = {
    secret: 'SecretWord',
    cookie: {},
    resave: false,
    saveUninitialized: true
}

if (app.get('env') === 'production') {
    sess.cookie.secure = true;
}
  
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(frontendPath, '/public')))
app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())


const apiRoutes = require('./routes/api.js')
const pagesRoutes = require('./routes/pages.js')

app.use(userInViews())
app.use('/', apiRoutes)
app.use('/', pagesRoutes)

app.listen(port, () => console.log('Example app listening on port ' + port))

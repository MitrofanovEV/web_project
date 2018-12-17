const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const db = require('../controllers/dbController')

var strategy = new Auth0Strategy(
    {
      domain: 'usesdos.eu.auth0.com',
      clientID: 'Bzg8AkzKuiDQ9tRiDDxqy4yH9WEyzbz3',
      clientSecret: 'Wze2Iu2GGq57MEWgwiD1Yp1X83giWlZCUa6izZhKwreznzlUSro4wUjpM6xxpEJL',
      callbackURL:
        process.env.AUTH0_CALLBACK_URL || 'http://localhost:8080/callback'
    },
    async function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      if(!await db.isUser(profile.id)){
        await db.createUser({Token: profile.id, FirstName : profile.name.givenName, LastName: profile.name.familyName})
      }
      return done(null, profile)
    }
  )

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    done(null, user)
  })
  
  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

module.exports = passport
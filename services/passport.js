const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;




const userFromDB = {
    login: "user",
    pass: "pass"
}


passport.use(new LocalStrategy({
    usernameField: 'input_user',
    passwordField: 'input_pass'
},
    (user, pass, cb) => { // callback with login and password from our form

        console.log(user, userFromDB.login);

        if (user !== userFromDB.login)
            return cb(null, false, { message: 'User not found' });

        if (pass != userFromDB.pass)  //ToDo: use bcrypt       
            return cb(null, false, { message: 'Oops! Wrong password' });

        //return cb(null, JSON.stringify(user), {        // Go to serializeUser
        return cb(null, user, {        // Go to serializeUser
            message: 'Logged In Successfully'
        });
        return done(null, "Some error");

    })
);



passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    function (jwtPayload, cb) {

        //find the user in db if needed
        return cb(null, userFromDB);
   
    }
));

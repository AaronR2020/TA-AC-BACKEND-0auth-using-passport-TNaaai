const passport = require('passport');
GitHubStrategy= require('passport-github').Strategy
require('dotenv')
User=require('../model/user')

passport.use(new GitHubStrategy({

    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:/auth/github/callback
},(accessToken,refreshToken,profile,done)=>{
    user={name:profile.displayName,username=profile.username,email:profile.email,photo:profile._json.avatar_url}
    User.findOrCreate(user.email,(err,user)=>{
        if(err){
            return done(err);
        }
        if(user){
            return done(null,user)
        }
    })
}));

passport.serializeUser((user,done)=>{done(null,user.id)});
passport.deserializeUser((id,done)=>{User.findById(id,(err,user)=>{done(err,user)})});

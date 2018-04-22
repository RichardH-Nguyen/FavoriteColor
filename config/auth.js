/**
 * Created by su7163if on 4/17/2018.
 */
module.exports= {
    twitterAuth: {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackUrl: 'http://127.0.0.1:3000/auth/twitter/oauth'
    }
};
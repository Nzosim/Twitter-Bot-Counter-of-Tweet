const config = require('./config.json'),
    Twit = require('twit'),
    twitter = new Twit({
        consumer_key: config.API_KEY,
        consumer_secret: config.API_KEY_SECRET,
        access_token: config.ACCESS_TOKEN,
        access_token_secret: config.ACCESS_TOKEN_SECRET
    })

let i = 1
let compteur = () => { 
    twitter.post('statuses/update',{status: i}, responseCallback)
    i++
}

// gestion erreur api twitter
responseCallback = (error) => { if(error) console.log("Erreur:", error) }



setInterval(compteur, 60000) // 1 minutes  

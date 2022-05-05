const express = require('express');
const TwitterApiV2 = require('twitter-api-v2');
const app = express();
const cors = require('cors');
app.use(cors({origin: '*'}))

const port = 3000;

const twitterClient = new TwitterApiV2.TwitterApi('AAAAAAAAAAAAAAAAAAAAAIXDcAEAAAAAx0KaCjHVg2OFcDsD1onlJHXi12I%3DfVi9o18a42PTNXV6XCOzx3bWCwSHLpSlWH3Hn0AiOyGBBEW1oV')

app.get('/tweets/:hashtag', (req, res) => {
    var hashtag = req.params.hashtag;
    twitterClient.v2.get('tweets/search/recent', { query: '#' + hashtag, max_results: 10 })
    .then(tweets => res.send(tweets))
    .catch(error => res.send(error))
    
})

app.listen(port, () => console.log(`Server running on port ${port}`))






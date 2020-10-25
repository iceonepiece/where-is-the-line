const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || 'de6fa8a555ff4e7598854ead5b328b6',
  channelSecret: process.env.CHANNEL_SECRET || 'dwOhmP9xpt77lGAze/NoQQYnsNPd9JcvIDhVUTMdEBoKS0UZFAyas0xNmIYd4r0OdRiNyqBGWW6DKLAYybKdYMhqbtntZh5g7BlOP93wB/03z9cfcnLjDJ3rdiRAXcebvoWz+sAGZd5T456piJLvhwdB04t89/1O/w1cDnyilFU=',
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

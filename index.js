require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

// Creates express app
const app = express()
// The port used for Express server
const PORT = process.env.PORT || 80
// Starts server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  let text = req.body.text
  console.log(text)
  let emoji = ''
  switch (text) {
  case 'sun':
    emoji = ':sunny:'
    break;
  case 'rain':
    emoji = ':rain_cloud:'
    break;
  default:
    emoji = ':mountain_railway:'

  }

  console.log(emoji)

  let data = {
    profile: JSON.stringify({
      status_text: 'riding a train',
      status_emoji: emoji,
      status_expiration: 0
    })
  }
  console.log(emoji)

  request.post({
    url: 'https://slack.com/api/users.profile.set',
    auth: {
      'bearer': process.env.SLACK_AUTH_TOKEN
    },
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    formData: data,
    json: true
  },
  function (error, response, body) {
    console.log(body)
    res.json()
  });
});

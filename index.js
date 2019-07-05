require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const request = require("request")

// Creates express app
const app = express()
// The port used for Express server
const PORT = 80
// Starts server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    let text = req.body.text
    var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: processText(text)
    }};
request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
      // Sends welcome message
      //console.log(error)
      console.log(response)
      //console.log(body)
      res.json()
    });
});

function processText(text) {
    return(text)
}

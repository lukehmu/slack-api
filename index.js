require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const request = require("request")

// Creates express app
const app = express()
// The port used for Express server
const PORT = process.env.PORT ||80
// Starts server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    let text = req.body.text
    res.set("Authorization: Bearer xoxp-683738623317-673489444386-673793607251-0a2fbb028b83c25b87c7e0577ef99c87")
    let data =
    {
        "profile": {
        "status_text": "riding a train",
        "status_emoji": ":mountain_railway:",
        "status_expiration": 0
    }
}
request.post('https://slack.com/api/users.profile.set', data, function (error, response, body) {
      // Sends welcome message
      //console.log(error)
      console.log(body)
      //console.log(body)
      res.json()
    });
});

// app.post('/', (req, res) => {
//     let text = req.body.text
//     var data = {form: {
//     token: process.env.SLACK_AUTH_TOKEN,
//     channel: "#luke-test",
//     text: processText(text)
//     }};
// request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
//       // Sends welcome message
//       //console.log(error)
//       console.log(body)
//       //console.log(body)
//       res.json()
//     });
// });

function processText(text) {
    return(text)
}

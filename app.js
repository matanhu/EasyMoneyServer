const express = require('express')
const app = express()
const request = require('request');

const port = process.env.PORT || 80;

app.get('/EasyMoneyNotification/:title/:text', function (req, res) {
  res.send('Hello World!')
var myJSONObject = {
        "to":"/topics/EasyMoney",
        "data":{
            "extra_information":"This is Extra Information"
        },
        "notification":{
            "title": req.params.title,
            "text": req.params.text
        }
    };

    request({
    url: "https://fcm.googleapis.com/fcm/send",
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
        "Authorization": "key=AAAAoUCR9J4:APA91bHiMiDwFd8jafoTaqFUNrwpUDPfMYQriPHcF8WbT0_wp7GJLQj5nKKApom3ycR4qHft5s2AE9ozRioRXXakSP45sClrBCcr-uXoLJU01TG-QCM17wsxAa8pvzY_NTLtiui6glfX"
    },
    body: myJSONObject
    }, function (error, response, body){
        if (!error && response.statusCode == 200) {
            console.log("Good!");
        }
    });
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port +'!');
})
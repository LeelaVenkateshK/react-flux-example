/*
/!**
 * Created by WS33 on 4/6/2017.
 *!/
var plivo = require('plivo');
var p = plivo.RestAPI({
  authId: 'MAZJI5NTNJMTI3Y2U4NT',
  authToken: 'NGI3ZDAyMmQ0NjNkYzczYTRlZGFkNTlmODAxYzE4'
});

var params = {
  'src': '89885315025', // Sender's phone number with country code
  'dst': '+918985315025', // Receiver's phone Number with country code
  'text': 'Hey whats\'up', // Your SMS Text Message - French
  // 'url' : "https://intense-brook-8241.herokuapp.com/report/", // The URL to which with the status of the message is sent
  'method': 'GET' // The method used to call the url
};

// Prints the complete response
p.send_message(params, function (status, response) {
  response = '';
});*/

const fs = require("fs");

const filepath = 'root/userlists.txt';
const datasteram = fs.readFileSync(filepath, 'utf8');

console.log(JSON.stringify(datasteram));
// var request = require('request');
// var http = require('querystring');
// require('request-to-curl');

// var get_response_host = "http://www.msftconnecttest.com/redirect";
// var post_request_host = "https://welcome2.wifi.id/authnew/login/check_login.php?"

// //post request target host
// var postData = querystring.stringify({
//     'ipc' : 'ipc',
//     'gw_id': 'gw_id',
//     'mac': 'mac',
//     'redirect': `${get_response_host}&wlan=valuedevice`
// })

// var options = {
//     'hostname': 'https://welcome2.wifi.id/authnew/login/check_login.php',
//     'port': 80,
//     'path': '/upload',
//     'method': 'POST',
//     'headers': {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length': postData.length
//     }
// }

// var req = htpp.request((option, res) => {
//     console.log(req.toCurl());
// })

// req.on('error', (e) => {
//     console.log(`problem with request: ${e.message}`);
// })

// req.write(postData);
// req.end();

// //request response target host
// request(get_response_host, (error, response, body) => {
//     console.log(JSON.stringify(body));
// })

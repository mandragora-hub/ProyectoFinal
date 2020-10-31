//Import Libraries 
var express = require('express'),
    http = require('http');

/***Midleware**/
var cors = require('cors');
var bodyParser = require('body-parser');

//Create a new Express application and Configure it
var app = express();
app.use(cors()); // Use cors module for enable Cross-origin resource sharing 
// parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static('src/public/image')) //for render favicon


//Configure route
require('./routes')(app)
var { Helper } = require('./utils');

module.exports = {
    listen: () => {
        var httpServer = http.createServer(app);
        httpServer.listen(Helper.PORT, () => {
            console.log(`RestApi running at ${Helper.HTTPUrl}`);
        })
    }
}



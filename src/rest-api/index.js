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
const helper = require('./utils/Helper');

module.exports = {
    listen: () => {
        var httpServer = http.createServer(app);
        const port = process.env.port || 3000
        httpServer.listen(port, () => {
            console.log(`RestApi running`);
            // console.log(`RestApi running at ${Helper.HTTPUrl}`);
        })
    }
}



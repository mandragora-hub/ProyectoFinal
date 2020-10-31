require('dotenv').config();

const helper = {}
helper.VERSION = 0;
helper.BUILD = 0;
helper.URL = 'http://127.0.0.1';
helper.HOSTNAME = process.env.HOSTNAME;
helper.PORT = process.env.PORT || 8080;
helper.HTTPUrl = 'http://' + helper.HOSTNAME + ":" + helper.PORT;
helper.HTTPSUrl = 'https://' + helper.HOSTNAME + ":" + helper.HTTPS_PORT;
helper.API_SERVER = this.HTTPSUrl
module.exports = helper;
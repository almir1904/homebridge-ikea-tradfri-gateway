"use strict";

var Path = require('path');
var isString = require('yow/isString');

module.exports = function(homebridge) {

    if (!isString(process.env.HOME))
        throw new Error('The HOME environment variable must be defined.');

    // Load .env
    require('dotenv').config({path: Path.join(process.env.HOME, '.homebridge/.env')});

    const TradfriPlatform = require('./src/platform.js')

    homebridge.registerPlatform('homebridge-tradfrigw', 'TradfriGW',TradfriPlatform);
};

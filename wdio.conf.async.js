exports.config = require('./wdio.conf.js').config;
exports.config.sync = false;
exports.config.specs = 'test.async.js';

exports.config = require('./wdio.conf.js').config;
exports.config.sync = true;
exports.config.specs = 'test.sync.js';

'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  files: ['./src'],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: {
    baseDir: './src'
  }
};

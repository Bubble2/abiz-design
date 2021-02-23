var lessToJs = require('less-vars-to-js');

var path = require('path');

var fs = require('fs');

var themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './default.less'), 'utf8'), {
  resolveVariables: true,
  stripPrefix: true
});
module.exports = themeVariables;
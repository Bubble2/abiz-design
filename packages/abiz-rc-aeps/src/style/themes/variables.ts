const lessToJs = require('less-vars-to-js') 
const path = require('path'); 
const fs = require('fs'); 

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './default.less'), 'utf8'),
  {
    resolveVariables: true,
    stripPrefix: true
  }
);

module.exports = themeVariables;
// const svgServer = require('./json-svg.parser');
const svgServer = require('./json-base64.parser');

console.log(svgServer.generateJson('./blue-city.svg'))

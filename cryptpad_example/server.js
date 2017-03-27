var Http = require('http');
var Ecstatic = require('ecstatic');
Http.createServer( Ecstatic({ root: __dirname + '/www' }) ).listen(8888);
console.log('Listening, go to http://localhost:8888/');

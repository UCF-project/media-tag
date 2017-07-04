const path = require('path');
const express = require('express');

const app = express();
const port = 5000;

app.use('/pages', express.static(`${__dirname}/pages`));
app.use('/assets', express.static(`${__dirname}/assets`));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req, res) => {
	res.sendFile(path.join(`${__dirname}/main.html`));
});

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
// 	res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

// 	next();
// });

app.listen(port, () => {
	console.log(`Website is listening on port ${port}`);
});


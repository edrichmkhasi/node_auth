const http = require('http');

const app = require('./app');

const port = process.env.PORT || 4200;

const server = http.createServer(app);

// server.listen(port, console.log('Server running on port: '+ port));

// pass a listener to the server to start it
server.listen(port, err => console.log(`listening http://localhost:${port}`));
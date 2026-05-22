const client = require('./services/client.js');
const conectar = require('./connection/connect.js');

conectar(client);
client.initialize();

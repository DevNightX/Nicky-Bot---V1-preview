const qrHandler = require('./qr.js');
const readyHandler = require('./ready.js');

const { numerodono1, numerodono2 } = require('../../config/config.js');
const helper = require('../../config/helper.js');

const cmdS = require('../commands/s.js');
const cmdBug = require('../commands/bug.js');
const cmdSuporte = require('../commands/suporte.js');
const cmdTagme = require('../commands/tagme.js');

module.exports = (client) => {

    client.on('qr', (qr) => {
        qrHandler(qr);
    });

    client.on('ready', () => {
        readyHandler();
    });

    client.on('message', async (message) => {
        const numero = message.from.split('@')[0];
        const texto = message.body.toLowerCase();
        const ehDono = numero === numerodono1 || numero === numerodono2;

        if (texto === `${helper.prefixo}s`) return cmdS(message);
        if (texto.startsWith(`${helper.prefixo}bug`)) return cmdBug(message);
        if (texto === `${helper.prefixo}suporte`) return cmdSuporte(message);
        if (texto === `${helper.prefixo}tagme`) return cmdTagme(message);
       
    });

};

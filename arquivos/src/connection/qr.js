const qrcode = require('qrcode-terminal');

module.exports = (qr) => {
    console.log('📱 QR CODE PARA CONECTAR:');
    qrcode.generate(qr, { small: true });
};

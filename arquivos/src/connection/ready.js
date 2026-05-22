const { nomeBot, dono1, dono2 } = require('../../config/config.js');

module.exports = () => {
    console.log(`✅ ${nomeBot} ONLINE!`);
    console.log(`👑 Donos: ${dono1} e ${dono2}`);
};

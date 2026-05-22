const helper = require('../../config/helper.js');

module.exports = async (message) => {
    const msgSuporte = `Necessita de ajuda? fale com nossos donos\n\n*NightX*\nhttps://wa.me/553188915453\n\n*Nich*\nhttps://wa.me/5527988488571`;
    return message.reply(`${msgSuporte}\n\n${helper.alerta}`);
};

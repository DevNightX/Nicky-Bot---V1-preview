const helper = require('../../config/helper.js');

module.exports = async (message) => {
    let sorteada = helper.mensagensAcao[Math.floor(Math.random() * helper.mensagensAcao.length)];
    return message.reply(`${sorteada}\n\n${helper.alerta}`);
};

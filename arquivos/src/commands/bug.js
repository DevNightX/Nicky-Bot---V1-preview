const { numerodono1, numerodono2 } = require('../../config/config.js');
const helper = require('../../config/helper.js');

module.exports = async (message) => {
    const numero = message.from.split('@')[0];
    const conteudo = message.body.slice(helper.prefixo.length).trim().replace('bug', '').trim();

    if (!conteudo) return message.reply('⚠️ Digite o problema encontrado junto ao comando!\nExemplo: /bug erro ao usar comando X');

    const msgBug = `🐞 *NOVO RELATÓRIO DE BUG* 🐞\n\n👤 Usuário: @${numero}\n📄 Texto: ${conteudo}`;
    await message.client.sendMessage(`${numerodono1}@c.us`, msgBug);
    await message.client.sendMessage(`${numerodono2}@c.us`, msgBug);
    
    return message.reply(`${helper.mensagemBug.replace('@nomedeusuario', `@${numero}`)}\n\n${helper.alerta}`);
};

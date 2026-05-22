module.exports = async (message) => {
    const numero = message.from.split('@')[0];
    return message.reply(`@${numero}`);
};

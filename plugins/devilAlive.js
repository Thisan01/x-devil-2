/*Codded by @Thisan01
Telegram: t.me/Thisan01
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'workingbot', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*Bang!! Bang!! My Bot is 👨‍💻x-devil🇱🇰*");

}));

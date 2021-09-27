/*Codded by Thisan01
Telegram: t.me/Thisan01
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'version', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*◈🤖DEVIL VERSION CHECKER🤖◈*\n\n*👩‍💻Devil ▻5.2.3*\n*Global Stable*");

}));

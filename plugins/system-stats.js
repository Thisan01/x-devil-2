/* Copyright (C) 2020 Thisan01

CODDED BY Thisan01

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - Thisan01
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "                 *👨‍💻X-DEVIL🇱🇰* \n     *Fire!! Fire!! Im Alive Now*\n\n*◈Version* ● ▷😻2.0 Global Stable\n*◈Branch* ● ▷ Devil TM\n*◈About* ● ▷ *👨‍💻x-ᴅᴇᴠɪʟ🤓is the better WhatsApp robot. First,You shoud subscribe our youtube chanel🧑‍✈️ :|▸https://youtu.be/SDmoPd4lGA0*\n*◯Owner* ▷ ▸https://Wa.me/+94740325068◂\n*Moders*●▷\n◼ ᴛʜɪꜱᴀɴ\n\n■ ᴍɪʜɪʀᴀɴɢᴀ\n■ᴄʜᴀʟᴀɴᴀ\n\n*◈Main Group* ▷https://chat.whatsapp.com/IfrEWJ30nUd3Cbi3uIvtIb\n*◈Support group* ▷https://chat.whatsapp.com/LwKlOWZjUDMKrJ9jNAZr0d\n\n*ᴛʜᴀɴᴋ ꜰᴏʀ ᴜꜱɪɴɢ 👨‍💻x-ᴅᴇᴠɪʟ🇱🇰*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👨‍💻Powered By Ravana Tech*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "                 *👨‍💻X-DEVIL🇱🇰* \n     *Fire!! Fire!! Im Alive Now*\n\n*◈Version* ● ▷😻2.0 Global Stable\n*◈Branch* ● ▷ Devil TM\n*◈About* ● ▷ *👨‍💻x-ᴅᴇᴠɪʟ🤓is the better WhatsApp robot. First,You shoud subscribe our youtube chanel🧑‍✈️ :|▸https://youtu.be/SDmoPd4lGA0*\n*◯Owner* ▷ ▸https://Wa.me/+94740325068◂\n*Moders*●▷\n◼ ᴛʜɪꜱᴀɴ\n\n■ ᴍɪʜɪʀᴀɴɢᴀ\n■ᴄʜᴀʟᴀɴᴀ\n\n*◈Main Group* ▷https://chat.whatsapp.com/IfrEWJ30nUd3Cbi3uIvtIb\n*◈Support group* ▷https://chat.whatsapp.com/LwKlOWZjUDMKrJ9jNAZr0d\n\n*ᴛʜᴀɴᴋ ꜰᴏʀ ᴜꜱɪɴɢ 👨‍💻x-ᴅᴇᴠɪʟ🇱🇰*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👨‍💻Powered By Ravana Tech*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

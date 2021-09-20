const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'mmpack', fromMe: true,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] ="https://telegra.ph/file/3488b9721d075ee9e72e9.jpg";
        r_text[2] ="https://telegra.ph/file/751bab3a465bbe2500948.jpg";
        r_text[3] ="https://telegra.ph/file/32e4b44b683515c55855a.jpg";
        r_text[4] ="https://telegra.ph/file/edbcc17dab138b8b25b19.jpg";
        r_text[5] ="https://telegra.ph/file/fe12473f283a6db0b2993.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════◉👨‍💻ᴅᴇᴠɪʟ🇱🇰◉═════╗*\n ✮ʀᴀᴠᴀɴᴀ ᴛᴇᴄʜ➽ \n*❖═👨‍💻x-devil මීම් ලැයිස්තුව═❖*\n\n*❇.yasai       ❴your text❵*\n*❇.uddika    ❴your text❵*\n*❇.aah          ❴your text❵*\n*❇.sir            ❴your text❵*\n*❇.my3         ❴your text❵*\n*❇.fuck         ❴your text❵*\n*❇.hii             ❴your text❵*\n*❇.asai          ❴your text❵*\n*❇.hapoi       ❴your text❵*\n*❇.anura       ❴your text❵*\n*❇.gemba       ❴your text❵*\n*❇.wow       ❴your text❵*\n*❇.hapo       ❴your text❵*\n*❇.babah       ❴your text❵*\n*❇.macn       ❴your text❵*\n*❇.nah       ❴your text❵*\n*╚═══❖══▣═👨‍💻x-devil🇱🇰═▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v* '})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'mmpack', fromMe: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] ="https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
        r_text[2] ="https://telegra.ph/file/751bab3a465bbe2500948.jpg";
        r_text[3] ="https://telegra.ph/file/32e4b44b683515c55855a.jpg";
        r_text[4] ="https://telegra.ph/file/edbcc17dab138b8b25b19.jpg";
        r_text[5] ="https://telegra.ph/file/fe12473f283a6db0b2993.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════◉👨‍💻ᴅᴇᴠɪʟ🇱🇰◉═════╗*\n ✮ʀᴀᴠᴀɴᴀ ᴛᴇᴄʜ➽ \n*❖═👨‍💻x-devil මීම් ලැයිස්තුව═❖*\n\n*❇.yasai       ❴your text❵*\n*❇.uddika    ❴your text❵*\n*❇.aah          ❴your text❵*\n*❇.sir            ❴your text❵*\n*❇.my3         ❴your text❵*\n*❇.fuck         ❴your text❵*\n*❇.hii             ❴your text❵*\n*❇.asai          ❴your text❵*\n*❇.hapoi       ❴your text❵*\n*❇.anura       ❴your text❵*\n*❇.gemba       ❴your text❵*\n*❇.wow       ❴your text❵*\n*❇.hapo       ❴your text❵*\n*❇.babah       ❴your text❵*\n*❇.macn       ❴your text❵*\n*❇.nah       ❴your text❵*\n*╚═══❖══▣═👨‍💻x-devil🇱🇰═▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v* '})
    }));
}

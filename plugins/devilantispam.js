const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

const code = ('🪓͡🥶ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ͡🔥͜͡☠️͢𑱄    X-DEVIL 2.0 2.0📵👉📵(９❺❻❷➄７✰✺➈❼)💣/n *👨‍💻x-devil🇱🇰*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nමෙම කේතය ඔබගේ දුරකථනය විකුර්ති පණිවිඩ නිසා සිරවිම වලකාලයි"
const TMUTE = "Trying to close temporary,\nතාවකාලිකව සමුහය වැසීමට උත්සාහ කිරීම"
const MUT = ".mute 1d"
const SCXR = "Running script...."
Asena.addCommand({pattern: 'modspm', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    await message.client.sendMessage(
        message.jid,code, MessageType.text);

        await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                               await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);

  }));

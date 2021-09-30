const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Downloads Image/Video From Instagram"
const NEED_WORD = "👨‍💻අනිවාර්යයෙන් ලින්ක් එකක් ඇතුළු කරන්න"
const FBDESC = "😻ෆේස්බුක් තුලින් වීඩියෝව බාගමින් පවතියි"
const LOADING = "©බාගමින් පවතියි..."
const NOT_FOUNDFB = "🦝වීඩියෝව හමුවූයේ නැත"
const CAPTION = "Caption"

Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: true, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Downloading the Post..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Made By *👨‍💻x-ᴅᴇᴠɪʟ🇱🇰*"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "*👨‍💻x-ᴅᴇᴠɪʟ🇱🇰*"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("🤔වැරදි ලින්ගුවකි.කරුණාකර නිවැරැදිව ඇතුළු කරන්න🙂")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By *👨‍💻x-ᴅᴇᴠɪʟ🇱🇰*"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)

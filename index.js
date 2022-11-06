/**
  * Edit features in './message/msg.js'
  * Contact me on WhatsApp wa.me/6285791458996
  * Follow https://github.com/rtwone
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

"use strict";
const {
default: makeWASocket,
BufferJSON,
initInMemoryKeyStore,
generateWAMessageFromContent, 
generateMessageID,
DisconnectReason,
AnyMessageContent,
makeInMemoryStore,
useSingleFileAuthState,
proto,
generateForwardMessageContent,
prepareWAMessageMedia,
delay
} = require("@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment')
const chalk = require('chalk')
const logg = require('pino')
const clui = require('clui')
const { Spinner } = clui
const { serialize } = require("./lib/myfunc");
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./lib/myfunc");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let session = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(session)
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./message/exif')
const background = 'https://telegra.ph/file/8edef79b495d60fc6c8b7.jpg'

function title() {
console.clear()
console.log(chalk.bold.green(figlet.textSync('WaBot MD', {
font: 'Standard',
horizontalLayout: 'default',
verticalLayout: 'default',
width: 80,
whitespaceBreak: false
})))
console.log(chalk.yellow(`\n                        ${chalk.yellow('[ Created By ZBot MultiDevice ]')}\n\n${chalk.red('Z-Bot MultiDevive')} : ${chalk.white('WhatsApp Bot Multi Device')}\n${chalk.red('Follow Instagram')} : ${chalk.white('@_daaa_1')}\n${chalk.red('Message Me On WhatsApp')} : ${chalk.white('+62 815-7885-9076')}\n${chalk.red('Donate')} : ${chalk.white('085869134434 ( Ovo/Pulsa/Dana )')}\n`))
}

/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @param {function} cb <optional> ;
*/
function nocache(module, cb = () => { }) {
console.log(`Module ${module} sedang diperhatikan terhadap perubahan`) 
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
	})
}
/**
* Uncache a module
* @param {string} module Module name or path;
*/
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`))

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

const connectToWhatsApp = async () => {
const conn = makeWASocket({
printQRInTerminal: true,
logger: logg({ level: 'fatal' }),
auth: state,
browser: ["Z-Bot Multi Device", "Safari", "3.0"]
        })
	title()
        store.bind(conn.ev)
	
	/* Auto Update */
	require('./message/help')
	require('./lib/myfunc')
	require('./message/msg')
	nocache('./message/help', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	nocache('./lib/myfunc', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	nocache('./message/msg', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	
	conn.multi = true
	conn.nopref = false
	conn.prefa = 'anjing'
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0]
		msg = serialize(conn, msg)
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
		require('./message/msg')(conn, msg, m, setting, store)
	})
	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			status.stop()
			reconnect.stop()
			starting.stop()
			console.log(mylog('Server Ready ✓'))
			lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
			? connectToWhatsApp()
			: console.log(mylog('Wa web terlogout...'))
		}
	})
	conn.ev.on('creds.update', () => saveState)
    
conn.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
       }
       conn.send5ButLoc = async (from, text = '' , footer = '', lok, but = [], options = {}) =>{
       let resize = await conn.reSize(lok, 300, 150)
       var template = generateWAMessageFromContent(from, {
       "templateMessage": {
       "hydratedTemplate": {
       "locationMessage": {
       "degreesLatitude": 0,
       "degreesLongitude": 0,
       "jpegThumbnail": resize
       },
       "hydratedContentText": text,
       "hydratedFooterText": footer,
       "hydratedButtons": but
       }
       }
       }, options)
       conn.relayMessage(from, template.message, { messageId: template.key.id })
      }
        conn.send5ButGif = async (from, text = '' , footer = '', gif, but = [], options = {}) =>{
        let a = [1,2]
        let b = a[Math.floor(Math.random() * a.length)]
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true, gifAttribution: b}, { upload: conn.waUploadToServer })
        var template = generateWAMessageFromContent(from, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            conn.relayMessage(from, template.message, { messageId: template.key.id })
    } 
     /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendImageAsSticker = async (from, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideoAsSticker = async (from, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    conn.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            let memeg = metadata.participants.length
    let num = anu.participants[0]
    let anu_user = `${num.split("@")[0]}`
    let time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
            for (let num of participants) {
                try {
                    var pp_user = await conn.profilePictureUrl(num, 'image')
                } catch {
                    var pp_user = 'https://tinyurl.com/yx93l6da'
                }
                let buffe = await getBuffer(`${pp_user}`)
                let bufe = await getBuffer(pp_user)
                let buff = await conn.reSize(bufe, 300, 150)
                if (anu.action == 'add') {
                let buttons = [
{buttonId: ``, buttonText: {displayText: 'Welcome'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
mentions:[num],
caption: `Hai Kak @${num.split("@")[0]},\nSaya *Z-Bot Multidevice*, Selamat Datang Di ${metadata.subject}.`,
footer: `Welcome Message by Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Welcome Message by Z-Bot Md`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: buff,
mediaUrl: `github.com/arul123`,
thumbnail: buff,
sourceUrl: ` `
}}
}
conn.sendMessage(anu.id, buttonMessage)
                } else if (anu.action == 'remove') {
                	let buttons = [
{buttonId: ``, buttonText: {displayText: 'Good Bye'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
mentions:[num],
caption: `@${num.split("@")[0]} Keluar Dari ${metadata.subject}.`,
footer: `Leave Message by Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Leave Message by Z-Bot Md`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: buff,
mediaUrl: `github.com/arulganz`,
thumbnail: buff,
sourceUrl: ` `
}}
}
conn.sendMessage(anu.id, buttonMessage)
                    //conn.sendMessage(anu.id, { image: buffe})
                } 
            }
        } catch (err) {
            console.log(err)
        }
    })
    
	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg })

	return conn
}

connectToWhatsApp()
.catch(err => console.log(err))

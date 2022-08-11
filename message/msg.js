

"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { floNime, toAudio } = require('../lib/convert.js')
const { pinterest } = require("../lib/pinterest")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { addCmd, AddHituser} = require("../lib/hitbot.js");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const _prem = require("../lib/premium");
const fs = require ("fs");
const chalk = require('chalk')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const bocil = require('@bochilteam/scraper') 
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const thu = fs.readFileSync('./media/thumb.jpg')
const maker = require('mumaker')
const { mediafiredl } = require('../lib/mediafiredl')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
// Exif
const Exif = require("../lib/exif")
const exif = new Exif()
const packnamestick = `Sticker Created By`
const authorstick = `Z-Bot Multi Device`
// DB Game
let tebakgambar = []

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let dashboard = JSON.parse(fs.readFileSync('./database/dashboard/datacmd.json'));
let userhit = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store, ) => {
	try {
		let { ownerNumber, botName, gamewaktu, limitCount } = setting
		let { allmenu } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		//const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good day🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good morning🌉'
}
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
                const toJSON = j => JSON.stringify(j, null,'\t')
		if (conn.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : ["6281578859076@s.whatsapp.net", "628990999699@s.whatsapp.net"].includes(sender) ? true : false
		const pushname = msg.pushName
		const quoted = msg.quoted ? msg.quoted : msg
        const mime = (quoted.msg || quoted).mimetype || ''
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const panggil = `@${sender.split("@")[0]}`
		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user
        const sisalimit = `${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}`
		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
	    const butlink = [
						{ urlButton: { displayText: `Link`, url : `${q}` } }
				]
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}

		conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
             var button = [{ buttonId: `!ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `!ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] })
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => conn.sendMessage(from, { text: `Send Play Error : ${e}` }))
           })
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
	    const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:Owner Z-Bot Multidevice\n' +
        'ORG:\n' +
        'item1.TEL;waid=6281578859076:+62 815-7885-9076\n' +
        'item1.X-ABLabel:📌 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑩𝒐𝒕\n' +
        'item2.EMAIL;type=INTERNET:https://instagram.com/_daaa_1\n' +
        'item2.X-ABLabel:✉️ Email\n' +
        'X-WA-BIZ-DESCRIPTION:Lapor Ke Owner Jika Ada Yang Eror\n' +
        'X-WA-BIZ-NAME:Z-Bot Multidevice\n' +
        'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        conn.sendMessage(from, { sticker: media }, { quoted: msg })
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
		
		const buttonsDefault = [
			{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6281578859076` } },
			{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/_daaa_1` } },
			{ quickReplyButton: { displayText: `• Dashboard`, id: `${prefix}dashboard` } },
			{ quickReplyButton: { displayText: `• Rules`, id: `${prefix}info` } }
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
     
		// Auto Read & Presence Online
		if (msg.message) {
        conn.sendPresenceUpdate('recording', from, sender, [msg.key.id])
        conn.readMessages([msg.key])
        console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(ucapanWaktu)), chalk.black(chalk.bgBlue(chats)) + '\n' + chalk.magenta('=> Dari'), chalk.green(`${pushname}`), chalk.yellow(sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(msg.isGroup ? pushname : 'Private Chat', from))
        }
		
		// Auto Registrasi
		if (isCmd && !isUser) {
		  pendaftar.push(sender)
		  fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		}
		
		// Premium
		_prem.expiredCheck(conn, premium)

		
        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var htgm = randomNomor(400, 500)
			addBalance(sender, htgm, balance)
		    var polo= `*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? tekan tombol dibawah`
		    const btn = [
			{ quickReplyButton: { displayText: `• Tebak Gambar`, id: `${prefix}tebakgambar` } }
		]
		    conn.sendMessage(from, { text: polo, footer: `Z-Bot Multidevice`, templateButtons: btn, quoted:msg})
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}

		if (chats.startsWith("x ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("> ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			// Main Menu
			case 'sc': {
		let buttons = [
                    {buttonId: `#runtime`, buttonText: {displayText: 'Back to Menu'}, type: 1},
                ]
                let buttonMessage = {
                    text: `tes`,
                    footer: `tes`,
                    buttons: buttons,
                    headerType: 4
                }
           conn.sendMessage(from, buttonMessage)
                }
                break
			case prefix+'getcase':
if (!isOwner) return reply(mess.OnlyOwner)
addCmd(`#`+command.slice(1), 1, dashboard)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./message/msg.js").toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break
			case prefix+'info':
			addCmd(`#`+command.slice(1), 1, dashboard)
			const btn = [
			{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/_daaa_1` } }
		]
			let rules = `
> Jangan Spam Bot
> Jangan Kirim Virtext/Virgam
> Jangan Telpon Bot

Melanggar ?  *Block*
`
conn.sendMessage(from, { text: rules, footer: `Z-Bot Multidevice`, templateButtons: btn, quoted:msg})
			break
			case prefix+'menu':
			   addCmd(`#`+command.slice(1), 1, dashboard)
			    var teks = allmenu(speed, runtime, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, pendaftar)
			    conn.sendMessage(from, { text: teks, footer: `Z-Bot Multidevice`, templateButtons: buttonsDefault, quoted:msg})
				break
			case prefix+'runtime':
			addCmd(`#`+command.slice(1), 1, dashboard)
			    reply(runtime(process.uptime()))
			    break
			case prefix+'speed':
			addCmd(`#`+command.slice(1), 1, dashboard)
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            textImg(`${latensi.toFixed(4)} Second`)
		            break
			case prefix+'owner':
			addCmd(`#`+command.slice(1), 1, dashboard)
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], 'Owner', msg)
			    }
			    break
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bang!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                addCmd(`#`+command.slice(1), 1, dashboard)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
            addCmd(`#`+command.slice(1), 1, dashboard)
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
case prefix+'candy':
case prefix+'christmas':
case prefix+'3dchristmas':
case prefix+'sparklechristmas':
case prefix+'deepsea':
case prefix+'scifi':
case prefix+'rainbow':
case prefix+'waterpipe':
case prefix+'spooky':
case prefix+'pencil':
case prefix+'circuit':
case prefix+'discovery':
case prefix+'metalic':
case prefix+'fiction':
case prefix+'demon':
case prefix+'transformer':
case prefix+'berry':
case prefix+'thunder':
case prefix+'magma':
case prefix+'3dstone':
case prefix+'neonlight':
case prefix+'glitch':
case prefix+'harrypotter':
case prefix+'brokenglass':
case prefix+'papercut':
case prefix+'watercolor':
case prefix+'multicolor':
case prefix+'neondevil':
case prefix+'underwater':
case prefix+'graffitibike':
case prefix+'snow':
case prefix+'cloud':
case prefix+'honey':
case prefix+'ice':
case prefix+'fruitjuice':
case prefix+'biscuit':
case prefix+'wood':
case prefix+'chocolate':
case prefix+'strawberry':
case prefix+'matrix':
case prefix+'blood':
case prefix+'dropwater':
case prefix+'toxic':
case prefix+'lava':
case prefix+'rock':
case prefix+'bloodglas':
case prefix+'hallowen':
case prefix+'darkgold':
case prefix+'joker':
case prefix+'wicker':
case prefix+'firework':
case prefix+'skeleton':
case prefix+'blackpink':
case prefix+'sand':
case prefix+'glue':
case prefix+'1917':
case prefix+'leaves':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	  reply(mess.wait)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, q)
                conn.sendMessage(from, { image: { url: anu }, caption: 'nih' }, { quoted: msg })
                limitAdd(sender, limit)
             }
             break
case prefix+'papercut':{
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	      reply(mess.wait)
	limitAdd(sender, limit)
	      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
         .catch((err) => console.log(err));
 }
break
case prefix+'transformer':{
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	      reply(mess.wait)
	      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
.catch((err) => console.log(err));
   limitAdd(sender, limit)
 }
break
case prefix+'neondevil':{
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	      reply(mess.wait)
	      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
         .catch((err) => console.log(err));
            limitAdd(sender, limit)
 }
break
case prefix+'3dstone':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
case prefix+'3davengers':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
case prefix+'thunder':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
case prefix+'window':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
case prefix+'blackpink':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
	case prefix+'glitch':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
addCmd(`#`+command.slice(1), 1, dashboard)
	reply(mess.wait)
	maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
	case prefix+'3dneon':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'neon':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'greenneon':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
  case prefix+'bokeh':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
   case prefix+'hollographic':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'joker':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'dropwater':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'neonlight':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
      addCmd(`#`+command.slice(1), 1, dashboard)
 }
break
	case prefix+'thewall':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	limitAdd(sender, limit)
	addCmd(`#`+command.slice(1), 1, dashboard)
	maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${text}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
  }
   break
	case prefix+'natural':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	addCmd(`#`+command.slice(1), 1, dashboard)
	maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
	case prefix+'carbon':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	addCmd(`#`+command.slice(1), 1, dashboard)
	maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
case prefix+'pencil':{
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
	reply(mess.wait)
	addCmd(`#`+command.slice(1), 1, dashboard)
	maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(from, { image: { url: data }, caption: `Success`}, { quoted: msg }))
  .catch((err) => console.log(err));
      limitAdd(sender, limit)
 }
break
          case prefix+'emoji': case prefix+'semoji':{
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
       	if (args.length < 2) return reply(`Kirim perintah ${command} `)
           addCmd(`#`+`semoji`, 1, dashboard)
           reply(mess.wait)
										emoji.get(`${q}`).then(emoji => {
										let teks = `${emoji.images[4].url}`
										sendWebp(from, teks)
									}).catch((err) => {
  reply(`Mohon Maaf Emoji ${q} Belum Tersedia di Emoji-Api\nCoba Lagi Dalam Beberapa Hari Kedepan`)
  })
        limitAdd(sender, limit)
									}
									break
			case prefix+'smeme':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} Teksnya`)
			    addCmd(`#`+`smeme`, 1, dashboard)
			    //const imgbb = require('imgbb-uploader')
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			      let qbc = await floNime(buffer)
			      let back = `${qbc.result.url}`
			      let [emoji1, emoji2] = q.split`|`
			      let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(` `)}/${encodeURIComponent(emoji1)}.png?background=${back}`
	              sendWebp(from, smeme).catch((err) => {
  reply(mess.error.api)
  })
			      //conn.sendImageAsSticker(from, sft, msg, { packname: emoji1, author: emoji2})
			      //conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`)}, { quoted: msg })
			      limitAdd(sender, limit)
			break
			case prefix+'smeme2':{
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} Teks|Teks`)
			    addCmd(`#`+`smeme2`, 1, dashboard)
			    //const imgbb = require('imgbb-uploader')
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			      let qbc = await floNime(buffer)
			      let back = `${qbc.result.url}`
			      let [emoji1, emoji2] = q.split`|`
			      let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(emoji1)}/${encodeURIComponent(emoji2)}.png?background=${back}`
	              sendWebp(from, smeme).catch((err) => {
  reply(mess.error.api)
  })
			      //conn.sendImageAsSticker(from, sft, msg, { packname: emoji1, author: emoji2})
			      //conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`)}, { quoted: msg })
			      limitAdd(sender, limit)
			}
			break
			case prefix+'wm': case prefix+'swm':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} packname|author`)
			    addCmd(`#`+`swm`, 1, dashboard)
			     var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      let sft = fs.readFileSync(`./${rand2}`)
			      let [emoji1, emoji2] = q.split`|`
			      conn.sendImageAsSticker(from, sft, msg, { packname: emoji1, author: emoji2})
			      //conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`)}, { quoted: msg })
			      limitAdd(sender, limit)
				  fs.unlinkSync(`./${rand2}`)
			    })
			    }
			break
			case prefix+'toimg': case prefix+'toimage':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    addCmd(`#`+`toimg`, 1, dashboard)
			   reply(mess.wait)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, { image: fs.readFileSync(`./${rand2}`)}, { quoted: msg })
			      limitAdd(sender, limit)
				  fs.unlinkSync(`./${rand2}`)
			    })
			    }
			    break
			case prefix+'stickerurl':
			sendWebp(from, q)
			break
			case prefix+'s': case prefix+'sticker':
			addCmd(`#`+`sticker`, 1, dashboard)
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				   conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)          
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
			    break 
			case prefix+'emojimix2': {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
addCmd(`#`+command.slice(1), 1, dashboard)
reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(q)}`).catch((err) => {
  reply(mess.error.api)
  })
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, { packname: packnamestick, author: authorstick, categories: res.tags })
await fs.unlinkSync(encmedia)
limitAdd(sender, limit)
}
}
break
			case prefix+'emojimix': {
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} link`)
		addCmd(`#`+command.slice(1), 1, dashboard)
		reply(mess.wait)
		let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`).catch((err) => {
  reply(mess.error.api)
  })
		for (let res of anu.results) {
		    let encmedia = await conn.sendImageAsSticker(from, res.url, msg, { packname: packnamestick, author: authorstick, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		limitAdd(sender, limit)
		}
	    }
	    break
	        // Downloader Menu
	        case prefix+'facebook':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
addCmd(`#`+command.slice(1), 1, dashboard)
reply(mess.wait)
let bko = await xfar.downloader.facebook(`${q}`).catch((err) => {
  reply(mess.error.api)
  })
let yu1io = await getBuffer(bko.hd).catch((err) => {
  reply(mess.error.api)
  })
			      conn.sendMessage(from, { caption: ` Success Download Video Facebook`, video: yu1io, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} ).catch((err) => {
  reply(mess.error.api)
  })
			       limitAdd(sender, limit)
break
case prefix+'igstory':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} username`)
addCmd(`#`+command.slice(1), 1, dashboard)
const btn = [
			{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/_daaa_1` } }
		]
let yjk = await bocil.instagramStory(`${q}`).catch((err) => {
  reply(mess.error.api)
  })
console.log(yjk)
reply(mess.wait)
for (let i of yjk.results) {
  if (i.url.includes('mp4')) {
  conn.sendMessage(from, { caption: ` Succes Download Video Instagram, Thanks For Using zBot`, video:{url:i.url}, templateButtons: btn, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  } else {
  conn.sendMessage(from, { caption: ` Succes Download Image Instagram, Thanks For Using zBot`, image:{url:i.url}, templateButtons: btn, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  }
  }
 limitAdd(sender, limit)
 }
break
case prefix+'twitter':{
	        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			addCmd(`#`+command.slice(1), 1, dashboard)
	        let gut = await xfar.downloader.twitter(q).catch((err) => {
  reply(mess.error.api)
  })
	        console.log(gut)
	         reply(mess.wait)
             let yuio = await getBuffer(gut.quality_720).catch((err) => {
  reply(mess.error.api)
  })
	        conn.sendMessage(from, { caption: ` Success Download Video Twitter`, video: yuio, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} ).catch((err) => {
  reply(mess.error.api)
  })
	         limitAdd(sender, limit)
	}
	        break
	        case prefix+'ytmp3':{
	        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			addCmd(`#`+command.slice(1), 1, dashboard)
	        let { yta } = require('../lib/y2mate')
            let quality = '128kbps'
            let media = await yta(q).catch((err) => {
  reply(mess.error.api)
  })
            if (media.filesize >= 100000) return reply('File Melebihi Batas ')
            let med = await getBuffer(`${media.thumb}`)
            let anu = `: ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${q}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`
            let buttons = [
{buttonId: `${prefix}owner`, buttonText: {displayText: '�Owner'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: anu,
footer: `Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{
"forwardingScore": 1000000000,
 isForwarded: true,
externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: med,
mediaType:2,
mediaUrl: `https://youtu.be/x-O0WHkv3uc`,
sourceUrl: `https://instagram.com/_daaa_1`,
}}
}
conn.sendMessage(from, buttonMessage, { quoted: msg })
            conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: msg })
	        limitAdd(sender, limit)
	}
	        break
	        case prefix+'ytmp4':{
	        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			addCmd(`#`+command.slice(1), 1, dashboard)
			reply(mess.wait)
			let { ytv } = require('../lib/y2mate')
            let quality = args[1] ? args[1] : '480p'
            let media = await ytv(q).catch((err) => {
  reply(mess.error.api)
  })
            if (media.filesize >= 100000) return reply('File Melebihi Batas')
            conn.sendMessage(from, { caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${q}\n• Ext : MP3\n• Resolusi : ${args[1] || '480p'}`, video: { url: media.dl_link }, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} ).catch((err) => {
  reply(mess.error.api)
  })
	         limitAdd(sender, limit)
}
	        break
	        case prefix+'mediafire':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
			addCmd(`#`+command.slice(1), 1, dashboard)
			    reply(mess.wait)
			let rescun = await mediafiredl(q).catch((err) => {
  reply(mess.error.api)
  })
let result = `
*MediaFire Download*
=> Nama : ${rescun[0].nama}
=> Ukuran : ${rescun[0].size}
=> Link : ${rescun[0].link}`
reply(result)
conn.sendMessage(from, { document: { url: `${rescun[0].link}`}, fileName: `${rescun[0].nama}`, mimetype: 'zip' }, { quoted: msg }).catch((err) => {
  reply(mess.error.api)
  })
					limitAdd(sender, limit)
					break
		case prefix+'gitclone':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
addCmd(`#`+command.slice(1), 1, dashboard)
reply(mess.wait) 
	const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [_, user, repo] = args[1].match(regex) || []
    repo = repo.replace(/.git$/, "")
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = `${repo}`
    conn.sendMessage(from, {document: {url: `${url}`}, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : msg }).catch((err) => {
  reply(mess.error.api)
  })
 limitAdd(sender, limit)
}
break
	        case prefix+'stickertele':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
addCmd(`#`+command.slice(1), 1, dashboard)
reply(mess.wait)
let packName = args[1].replace("https://t.me/addstickers/", "")
let gas = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } }).catch((err) => {
  reply(mess.error.api)
  })
reply(`*Total stiker:* ${gas.result.stickers.length}
*Estimasi selesai:* ${gas.result.stickers.length * 1.5} detik`.trim())
for (let i = 0; i < gas.result.stickers.length; i++) {
        let fileId = gas.result.stickers[i].thumb.file_id
        let gasIn = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let stick = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + gasIn.result.file_path
        let media = await getBuffer(stick)
        sendWebp(from, stick)
        //conn.sendImageAsSticker(from, media, msg, { packname: packnamestick, author: authorstick })
}
        limitAdd(sender, limit)
break 
case prefix+'igfoto':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
addCmd(`#`+command.slice(1), 1, dashboard)
  reply(mess.wait)
  bocil.instagramdl(q).then(data => {
  for (let i of data) {
  conn.sendMessage(from, { caption: ` Succes Download Image Instagram, Thanks For Using zBot`, image:{url:i.url}, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  }
  })
  .catch((err) => {
  reply(mess.error.api)
  })
  limitAdd(sender, limit)
  break
case prefix+'igvideo':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
addCmd(`#`+command.slice(1), 1, dashboard)
  reply(mess.wait)
  bocil.instagramdl(q).then(data => {
  for (let i of data) {
  conn.sendMessage(from, { caption: ` Succes Download Video Instagram, Thanks For Using zBot`, video:{url:i.url}, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  }
  })
  .catch((err) => {
  reply(mess.error.api)
  })
  limitAdd(sender, limit)
  break
case prefix+'instagram':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
addCmd(`#`+command.slice(1), 1, dashboard)
  reply(mess.wait)
  bocil.instagramdlv3(q).then(data => {
  for (let i of data) {
  if (i.url.includes('mp4')) {
  conn.sendMessage(from, { caption: ` Succes Download Video Instagram, Thanks For Using zBot`, video:{url:i.url}, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  } else {
  conn.sendMessage(from, { caption: ` Succes Download Image Instagram, Thanks For Using zBot`, image:{url:i.url}, templateButtons: butlink, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
  }
  }
  })
  .catch((err) => {
  reply(mess.error.api)
  })
  limitAdd(sender, limit)
  break 
			case prefix+'tiktokaudio':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			addCmd(`#`+command.slice(1), 1, dashboard)
			    reply(mess.wait)
			    bocil.tiktokdlv3(`${q}`).then( data => {
			      conn.sendMessage(from, { audio: { url: data.video.no_watermark }, mimetype: 'audio/mp4' }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
		case prefix+'tiktok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			addCmd(`#`+command.slice(1), 1, dashboard)
			    reply(mess.wait)
			    bocil.tiktokdlv3(`${q}`).then( yut => {
				  let anutxt = `• Author : ${yut.author.nickname}\n• Description : ${yut.description}\n• Avatar : ${yut.author.avatar}`
			      var tidtod5 = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}tiktokaudio ${q}` } },
				]
				conn.sendMessage(from, { caption: anutxt, video: {url: yut.video.no_watermark}, templateButtons: tidtod5, footer: 'Z-Bot Multidevice', mentions: [panggil]} )
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			// Owner Menu
		    case  prefix+'sendsession':{
 if (!isOwner) return reply(mess.OnlyOwner)
 reply(mess.wait)
let anuu = fs.readFileSync('./kon.json')
conn.sendMessage(from, {document: anuu, mimetype: 'application/octet-stream', fileName: `kon.json`}, {quoted:msg})  
addCmd(`#`+command.slice(1), 1, dashboard)
}
break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
				addCmd(`#`+command.slice(1), 1, dashboard)
			    break
			case prefix+'join':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				addCmd(`#`+command.slice(1), 1, dashboard)
				break
                        case prefix+'bc':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, { text: `${q}` })
                               await sleep(1000)
                            }
                            addCmd(`#`+command.slice(1), 1, dashboard)
                            break
			case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				addCmd(`#`+command.slice(1), 1, dashboard)
				break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                addCmd(`#`+command.slice(1), 1, dashboard)
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                addCmd(`#`+command.slice(1), 1, dashboard)
                break
			// Search Menu
			case prefix+'lirik':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
				reply(mess.wait)
			    ra.Musikmatch(q).then(async(data) => {
				  var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
				  conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
				}).catch(() => reply(`Judul lagu tidak ditemukan`))
				limitAdd(sender, limit)
                  addCmd(`#`+command.slice(1), 1, dashboard)
				break
			case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  limitAdd(sender, limit)
                  addCmd(`#`+command.slice(1), 1, dashboard)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'play':{
			if (args.length < 2) return reply(`Kirim perintah ${command} query`)
			reply(mess.wait)
			let yts = require("yt-search")
			addCmd(`#`+command.slice(1), 1, dashboard)
            let search = await yts(`${q}`)
            let anu = `             *Data Berhasil Di Dapatkan*\n
🥝 Judul : ${search.all[0].title}
🍉 Durasi : ${search.all[0].timestamp}
🍇 Upload : ${search.all[0].ago}
🍑 Views : ${search.all[0].views}\n
_Pilih Media Di Bawah Ini Untuk di Download_`
			let buffe = await getBuffer(`${search.all[0].thumbnail}`)
			let buttons = [
{buttonId: `${prefix}ytmp3 ${search.all[0].url}`, buttonText: {displayText: '�Music'}, type: 1},{buttonId: `${prefix}ytmp4 ${search.all[0].url}`, buttonText: {displayText: '�Video'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: anu,
footer: `Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{
"forwardingScore": 1000000000,
 isForwarded: true,
externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: buffe,
mediaType:2,
mediaUrl: `https://youtu.be/x-O0WHkv3uc`,
sourceUrl: `https://instagram.com/_daaa_1`,
}}
}
conn.sendMessage(from, buttonMessage, { quoted: msg })
			}
			break
			case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
				addCmd(`#`+command.slice(1), 1, dashboard)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}ytmp3 link*
 *${prefix}ytmp4 link*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			// Game Menu
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
			    addCmd(`#`+command.slice(1), 1, dashboard)
				kotz.tebakgambar().then( data => {
				  data = data[0]
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s\n\nJawab Menggunakan Huruf Kecil Semua`)
				  conn.sendMessage(from, { image: { url: data.image }, caption: teks }, { quoted: msg })
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
				})
			    break
			// Group Menu
			case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'group': 
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
				addCmd(`#`+command.slice(1), 1, dashboard)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
			    break
     
			// Bank & Payment Menu
			case prefix+'topbalance':{
				addCmd(`#`+command.slice(1), 1, dashboard)
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
             case prefix+'dashboard':{
             	addCmd(`#`+command.slice(1), 1, dashboard)
                dashboard.sort((a, b) => (a.dashboard < b.dashboard) ? 1 : -1)
                let top = '*── 「 Dashboard Z-Bot Multidevice 」 ──*\n\n'
                let arrTop = []
                var p = 0
				var total = 10000
				if (dashboard.length < 10000) total = dashboard.length
                for (let i = 0; i < total; i ++){
                    top += `${p+=1}. Command : *${dashboard[i].id}*\n🥑 Telah Di Gunakan Sebanyak *${dashboard[i].total}* Kali\n\n`
                    arrTop.push(dashboard[i].id)
                }
                const btn = [
			{ urlButton: { displayText: `Instagram`, url : `https://instagram.com/_daaa_1` } }
		]
conn.sendMessage(from, { text: top, footer: `Z-Bot Multidevice`, templateButtons: btn, quoted:msg})
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $50 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                addCmd(`#`+command.slice(1), 1, dashboard)
                let ane = Number(parseInt(args[1]) * 50)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 addCmd(`#`+command.slice(1), 1, dashboard)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                addCmd(`#`+command.slice(1), 1, dashboard)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': 
			case prefix+'balance':
			 addCmd(`#`+command.slice(1), 1, dashboard)
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
			default:
		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}

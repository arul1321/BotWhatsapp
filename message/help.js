const moment = require("moment-timezone");
const fs = require("fs");
const speed = require("performance-now");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
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
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}
var yui ='```'
let timestamp = speed();
let latensi = speed() - timestamp
         
           
exports.allmenu = (speed, runtime, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, pendaftar) => {
    var p = 0
	return `
🎆 *Hallo ${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*

*── 「      INFO Z-Bot Multidevice     」 ──*
🗂Library : *Baileys-MD*.
🕹Prefix : ( ${prefix} )
🗓Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
⏰Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
👥Total User Z-Bot : ${pendaftar.length}
🕙Runtime : ${runtime(process.uptime())}
⏳Speed : ${latensi.toFixed(4)} Second
    
*── 「  INFO User Z-Bot Multidevice  」 ──*
🦄Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
🐯Limit : ${isOwner ? 'Infinity' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
🐼Limit Game : ${isOwner ? 'Infinity' : cekGLimit(sender, gcount, glimit)}
🐮Balance : $${toCommas(getBalance(sender, balance))}
	${readmore}
  *(🌹)  Main Menu*
  ${p+=1}. ${yui}${prefix}menu${yui}
  ${p+=1}. ${yui}${prefix}owner${yui}
  ${p+=1}. ${yui}${prefix}speed${yui}
  ${p+=1}. ${yui}${prefix}runtime${yui}
  ${p+=1}. ${yui}${prefix}cekprem${yui}
  ${p+=1}. ${yui}${prefix}listprem${yui}
  ${p+=1}. ${yui}${prefix}topbalance${yui}

  *(🍉)  Converter/Tools*
  ${p+=1}. ${yui}${prefix}sticker${yui}
  ${p+=1}. ${yui}${prefix}toimg${yui}
  ${p+=1}. ${yui}${prefix}emojimix 😀+😂${yui}

  *(🥝)  Downloader*
  ${p+=1}. ${yui}${prefix}tiktok link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}tiktokaudio link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}igfoto link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}igvideo link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}stickertele link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}mediafire link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}ytmp3 link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}ytmp4 link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}gitclone link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}facebook link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}twitter link${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}igstory username${yui} Ⓛ
  
  *(🔎)  Search Menu*
  ${p+=1}. ${yui}${prefix}play${yui} 
  ${p+=1}. ${yui}${prefix}lirik${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}grupwa${yui} Ⓛ
  ${p+=1}. ${yui}${prefix}ytsearch${yui} Ⓛ
  
  *(🎮)  Game Menu*
  ${p+=1}. ${yui}${prefix}tebakgambar${yui} Ⓛⓖ
  
  *(🏦)  Payment & Bank*
  ${p+=1}. ${yui}${prefix}buylimit${yui}
  ${p+=1}. ${yui}${prefix}buyglimit${yui}
  ${p+=1}. ${yui}${prefix}transfer${yui}
  ${p+=1}. ${yui}${prefix}limit${yui}
  ${p+=1}. ${yui}${prefix}balance${yui}
  
  *(👥)  Group Menu*
  ${p+=1}. ${yui}${prefix}linkgrup${yui}
  ${p+=1}. ${yui}${prefix}setppgrup${yui}
  ${p+=1}. ${yui}${prefix}setnamegc${yui}
  ${p+=1}. ${yui}${prefix}setdesc${yui}
  ${p+=1}. ${yui}${prefix}group${yui}
  ${p+=1}. ${yui}${prefix}revoke${yui}
  ${p+=1}. ${yui}${prefix}hidetag${yui}
  
  *(🧑🏻‍💻)  Owner Menu*
  ${p+=1}. ${yui}> evalcode${yui}
  ${p+=1}. ${yui}x evalcode-2${yui}
  ${p+=1}. ${yui}$ executor${yui}
  ${p+=1}. ${yui}${prefix}join${yui}
  ${p+=1}. ${yui}${prefix}broadcast${yui}
  ${p+=1}. ${yui}${prefix}setppbot${yui}
  ${p+=1}. ${yui}${prefix}leave${yui}
  ${p+=1}. ${yui}${prefix}addprem${yui}
  ${p+=1}. ${yui}${prefix}delprem${yui}
  ${p+=1}. ${yui}${prefix}sendsession${yui}

*──「 Simple Bot Whatsapp MD Beta 」──*
`
}

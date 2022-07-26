const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
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

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
    🎆 *${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*

    🐺Library : *Baileys-MD*.
    🦊Prefix : ( ${prefix} )
    🐱Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    🦁Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	🦄Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	🐯Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	🐼Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	🐮Balance : $${toCommas(getBalance(sender, balance))}

  *( 📍 )  Main Menu*
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  ≻ ${prefix}cekprem
  ≻ ${prefix}listprem
  ≻ ${prefix}topbalance

  *( ✏️ )  Converter/Tools*
  ≻ ${prefix}sticker

  *( ⌛ )  Downloader*
  ≻ ${prefix}tiktok link Ⓛ
  ≻ ${prefix}tiktokaudio link Ⓛ
  ≻ ${prefix}instagram link Ⓛ
  ≻ ${prefix}stickertele link Ⓛ
  ≻ ${prefix}mediafire link Ⓛ
  ≻ ${prefix}ytmp3 link Ⓛ
  ≻ ${prefix}ytmp4 link Ⓛ
  ≻ ${prefix}gitclone link Ⓛ
  ≻ ${prefix}facebook link Ⓛ
  ≻ ${prefix}twitter link Ⓛ
  
  *( 🔎 )  Search Menu*
  ≻ ${prefix}lirik Ⓛ
  ≻ ${prefix}grupwa Ⓛ
  ≻ ${prefix}ytsearch Ⓛ
  
  *( 🎮 )  Game Menu*
  ≻ ${prefix}tebakgambar Ⓛⓖ
  
  *( 🏦 )  Payment & Bank*
  ≻ ${prefix}buylimit
  ≻ ${prefix}buyglimit
  ≻ ${prefix}transfer
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  
  *( 👥 )  Group Menu*
  ≻ ${prefix}linkgrup
  ≻ ${prefix}setppgrup
  ≻ ${prefix}setnamegc
  ≻ ${prefix}setdesc
  ≻ ${prefix}group
  ≻ ${prefix}revoke
  ≻ ${prefix}hidetag
  
  *( 🧑🏻‍💻 )  Owner Menu*
  > evalcode
  x evalcode-2
  $ executor
  ≻ ${prefix}join
  ≻ ${prefix}broadcast
  ≻ ${prefix}setppbot
  ≻ ${prefix}exif
  ≻ ${prefix}leave
  ≻ ${prefix}addprem
  ≻ ${prefix}delprem
  ≻ ${prefix}sendsession

`+'     \`\`\`Simple Bot Whtsapp\`\`\`'
}

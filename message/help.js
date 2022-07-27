const moment = require("moment-timezone");
const fs = require("fs");
const speed = require("performance-now");

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
var yui ='```'
let timestamp = speed();
let latensi = speed() - timestamp
           
exports.allmenu = (speed, runtime, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, pendaftar) => {
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
	
  *(🌹)  Main Menu*
  1. ${yui}${prefix}menu${yui}
  2. ${yui}${prefix}owner${yui}
  3. ${yui}${prefix}speed${yui}
  4. ${yui}${prefix}runtime${yui}
  5. ${yui}${prefix}cekprem${yui}
  6. ${yui}${prefix}listprem${yui}
  7. ${yui}${prefix}topbalance${yui}

  *(🍉)  Converter/Tools*
  8. ${yui}${prefix}sticker${yui}

  *(🥝)  Downloader*
  9.   ${yui}${prefix}tiktok link${yui} Ⓛ
  10. ${yui}${prefix}tiktokaudio link${yui} Ⓛ
  11. ${yui}${prefix}instagram link${yui} Ⓛ
  12. ${yui}${prefix}stickertele link${yui} Ⓛ
  13. ${yui}${prefix}mediafire link${yui} Ⓛ
  14. ${yui}${prefix}ytmp3 link${yui} Ⓛ
  15. ${yui}${prefix}ytmp4 link${yui} Ⓛ
  16. ${yui}${prefix}gitclone link${yui} Ⓛ
  17. ${yui}${prefix}facebook link${yui} Ⓛ
  18. ${yui}${prefix}twitter link${yui} Ⓛ
  19. ${yui}${prefix}igstory username${yui} Ⓛ
  
  *(🔎)  Search Menu*
  20. ${yui}${prefix}lirik${yui} Ⓛ
  21. ${yui}${prefix}grupwa${yui} Ⓛ
  22. ${yui}${prefix}ytsearch${yui} Ⓛ
  
  *(🎮)  Game Menu*
  23. ${yui}${prefix}tebakgambar${yui} Ⓛⓖ
  
  *(🏦)  Payment & Bank*
  24. ${yui}${prefix}buylimit${yui}
  25. ${yui}${prefix}buyglimit${yui}
  26. ${yui}${prefix}transfer${yui}
  27. ${yui}${prefix}limit${yui}
  28. ${yui}${prefix}balance${yui}
  
  *(👥)  Group Menu*
  29. ${yui}${prefix}linkgrup${yui}
  30. ${yui}${prefix}setppgrup${yui}
  31. ${yui}${prefix}setnamegc${yui}
  32. ${yui}${prefix}setdesc${yui}
  33. ${yui}${prefix}group${yui}
  34. ${yui}${prefix}revoke${yui}
  35. ${yui}${prefix}hidetag${yui}
  
  *(🧑🏻‍💻)  Owner Menu*
  36. ${yui}> evalcode${yui}
  37. ${yui}x evalcode-2${yui}
  38. ${yui}$ executor${yui}
  39. ${yui}${prefix}join${yui}
  40. ${yui}${prefix}broadcast${yui}
  41. ${yui}${prefix}setppbot${yui}
  42. ${yui}${prefix}leave${yui}
  43. ${yui}${prefix}addprem${yui}
  44. ${yui}${prefix}delprem${yui}
  45. ${yui}${prefix}sendsession${yui}

*──「 Simple Bot Whatsapp MD Beta 」──*
`
}

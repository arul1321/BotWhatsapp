const fs = require("fs");
const speed = require("performance-now");
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
                       *Hallo Kak 👋🏻*

   *Z-Bot Tidak Akan Memproses Jika*
           *Salah Dalam Penggunaan* 
                         *Command*

  *(🌹)  Main Menu*
  ${p+=1}. ${yui}${prefix}menu${yui}
  ${p+=1}. ${yui}${prefix}owner${yui}
  ${p+=1}. ${yui}${prefix}info${yui}
  ${p+=1}. ${yui}${prefix}speed${yui}
  ${p+=1}. ${yui}${prefix}runtime${yui}
  ${p+=1}. ${yui}${prefix}dashboard${yui}

  *(🍉)  Converter/Tools*
  ${p+=1}. ${yui}${prefix}sticker${yui}
  ${p+=1}. ${yui}${prefix}smeme${yui}
  ${p+=1}. ${yui}${prefix}smeme2 teks|teks${yui}
  ${p+=1}. ${yui}${prefix}toimg${yui}
  ${p+=1}. ${yui}${prefix}swm${yui}
  ${p+=1}. ${yui}${prefix}emojimix 😀+😂${yui}
  ${p+=1}. ${yui}${prefix}emojimix2 😂${yui}
  ${p+=1}. ${yui}${prefix}semoji 😂${yui}

  *(🥝)  Downloader*
  ${p+=1}. ${yui}${prefix}twitter link${yui} 
  ${p+=1}. ${yui}${prefix}tiktok link${yui} 
  ${p+=1}. ${yui}${prefix}tiktokaudio link${yui} 
  ${p+=1}. ${yui}${prefix}instagram link${yui} 
  ${p+=1}. ${yui}${prefix}stickertele link${yui} 
  ${p+=1}. ${yui}${prefix}mediafire link${yui} 
  ${p+=1}. ${yui}${prefix}ytmp3 link${yui} 
  ${p+=1}. ${yui}${prefix}ytmp4 link${yui} 
  ${p+=1}. ${yui}${prefix}gitclone link${yui} 
  ${readmore}
  *(🔎)  Search Menu*
  ${p+=1}. ${yui}${prefix}play${yui} 
  ${p+=1}. ${yui}${prefix}ytsearch${yui} 

  *(👥)  Group Menu*
  ${p+=1}. ${yui}${prefix}linkgrup${yui}
  ${p+=1}. ${yui}${prefix}setppgrup${yui}
  ${p+=1}. ${yui}${prefix}setnamegroup${yui}
  ${p+=1}. ${yui}${prefix}setdescription${yui}
  ${p+=1}. ${yui}${prefix}group${yui}
  ${p+=1}. ${yui}${prefix}revoke${yui}
  ${p+=1}. ${yui}${prefix}hidetag${yui}
  
  *(🧑🏻‍💻)  Owner Menu*
  ${p+=1}. ${yui}> evalcode${yui}
  ${p+=1}. ${yui}x evalcode-2${yui}
  ${p+=1}. ${yui}$ executor${yui}
  ${p+=1}. ${yui}${prefix}join${yui}
  ${p+=1}. ${yui}${prefix}bc${yui}
  ${p+=1}. ${yui}${prefix}setppbot${yui}
  ${p+=1}. ${yui}${prefix}leave${yui}
  ${p+=1}. ${yui}${prefix}sendsession${yui}
  ${p+=1}. ${yui}${prefix}getcase${yui}
  
  *(✏️)  Maker Menu*
 ${p+=1}. ${yui}${prefix}papercut${yui} 
 ${p+=1}. ${yui}${prefix}transformer${yui} 
 ${p+=1}. ${yui}${prefix}neondevil${yui} 
 ${p+=1}. ${yui}${prefix}3dstone${yui} 
 ${p+=1}. ${yui}${prefix}3davengers${yui} 
 ${p+=1}. ${yui}${prefix}thunder${yui} 
 ${p+=1}. ${yui}${prefix}window${yui} 
 ${p+=1}. ${yui}${prefix}blackpink${yui} 
 ${p+=1}. ${yui}${prefix}glitch${yui} 
 ${p+=1}. ${yui}${prefix}3dneon${yui} 
 ${p+=1}. ${yui}${prefix}neon${yui} 
 ${p+=1}. ${yui}${prefix}greenneon${yui} 
 ${p+=1}. ${yui}${prefix}bokeh${yui} 
 ${p+=1}. ${yui}${prefix}hollographic${yui} 
 ${p+=1}. ${yui}${prefix}joker${yui} 
 ${p+=1}. ${yui}${prefix}dropwater${yui} 
 ${p+=1}. ${yui}${prefix}neonlight${yui} 
 ${p+=1}. ${yui}${prefix}thewall${yui} 
 ${p+=1}. ${yui}${prefix}natural${yui} 
 ${p+=1}. ${yui}${prefix}carbon${yui} 
 ${p+=1}. ${yui}${prefix}pencil${yui} 
 ${p+=1}. ${yui}${prefix}candy${yui} 
 ${p+=1}. ${yui}${prefix}christmas${yui} 
 ${p+=1}. ${yui}${prefix}3dchristmas${yui} 
 ${p+=1}. ${yui}${prefix}sparklechristmas${yui} 
 ${p+=1}. ${yui}${prefix}deepsea${yui} 
 ${p+=1}. ${yui}${prefix}scifi${yui} 
 ${p+=1}. ${yui}${prefix}rainbow${yui} 
 ${p+=1}. ${yui}${prefix}waterpipe${yui} 
 ${p+=1}. ${yui}${prefix}spooky${yui} 
 ${p+=1}. ${yui}${prefix}pencil${yui} 
 ${p+=1}. ${yui}${prefix}circuit${yui} 
 ${p+=1}. ${yui}${prefix}discovery${yui} 
 ${p+=1}. ${yui}${prefix}metalic${yui} 
 ${p+=1}. ${yui}${prefix}fiction${yui} 
 ${p+=1}. ${yui}${prefix}demon${yui} 
 ${p+=1}. ${yui}${prefix}transformer${yui} 
 ${p+=1}. ${yui}${prefix}berry${yui} 
 ${p+=1}. ${yui}${prefix}thunder${yui} 
 ${p+=1}. ${yui}${prefix}magma${yui} 
 ${p+=1}. ${yui}${prefix}3dstone${yui} 
 ${p+=1}. ${yui}${prefix}neonlight${yui} 
 ${p+=1}. ${yui}${prefix}glitch${yui} 
 ${p+=1}. ${yui}${prefix}harrypotter${yui} 
 ${p+=1}. ${yui}${prefix}brokenglass${yui} 
 ${p+=1}. ${yui}${prefix}papercut${yui} 
 ${p+=1}. ${yui}${prefix}watercolor${yui} 
 ${p+=1}. ${yui}${prefix}multicolor${yui} 
 ${p+=1}. ${yui}${prefix}neondevil${yui} 
 ${p+=1}. ${yui}${prefix}underwater${yui} 
 ${p+=1}. ${yui}${prefix}graffitibike${yui} 
 ${p+=1}. ${yui}${prefix}snow${yui} 
 ${p+=1}. ${yui}${prefix}cloud${yui} 
 ${p+=1}. ${yui}${prefix}honey${yui} 
 ${p+=1}. ${yui}${prefix}ice${yui} 
 ${p+=1}. ${yui}${prefix}fruitjuice${yui} 
 ${p+=1}. ${yui}${prefix}biscuit${yui} 
 ${p+=1}. ${yui}${prefix}wood${yui} 
 ${p+=1}. ${yui}${prefix}chocolate${yui} 
 ${p+=1}. ${yui}${prefix}strawberry${yui} 
 ${p+=1}. ${yui}${prefix}matrix${yui} 
 ${p+=1}. ${yui}${prefix}blood${yui} 
 ${p+=1}. ${yui}${prefix}dropwater${yui} 
 ${p+=1}. ${yui}${prefix}toxic${yui} 
 ${p+=1}. ${yui}${prefix}lava${yui} 
 ${p+=1}. ${yui}${prefix}rock${yui} 
 ${p+=1}. ${yui}${prefix}bloodglas${yui} 
 ${p+=1}. ${yui}${prefix}hallowen${yui} 
 ${p+=1}. ${yui}${prefix}darkgold${yui} 
 ${p+=1}. ${yui}${prefix}joker${yui} 
 ${p+=1}. ${yui}${prefix}wicker${yui} 
 ${p+=1}. ${yui}${prefix}firework${yui} 
 ${p+=1}. ${yui}${prefix}skeleton${yui} 
 ${p+=1}. ${yui}${prefix}blackpink${yui} 
 ${p+=1}. ${yui}${prefix}sand${yui} 
 ${p+=1}. ${yui}${prefix}glue${yui} 
 ${p+=1}. ${yui}${prefix}1917${yui} 
 ${p+=1}. ${yui}${prefix}leaves${yui} 

*「 Simple Bot Whatsapp MD Beta 」*
`
}

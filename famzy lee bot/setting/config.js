const fs = require('fs')

/* #developer ꜰᴀᴡᴀᴢ ʟᴇᴋᴀɴ
youtube : https://youtube.com/@famzzy_lee

DELETE THIS WM IS A BIG SIN YOU NJIR
DON'T ADD YOUR NAME 📛
HERE SC

[ ! ] DO NOT 
*/

// Main Settings 
global.owner = "2348127187030" //don't change 
global.namabot = "Fᴀᴍᴢʏ V1" //don't change
global.ownername = "𝙵𝙰𝚆𝙰𝚉 𝙻𝙴𝙺𝙰𝙽"
// don't change it destroy the file
global.footer = "-ꜰᴀᴍᴢʏ-ʙᴜᴛᴛᴏɴ" //footer section
global.packname = "ꜱᴛɪᴄᴋᴇʀ ʙʏ"
global.author = "ꜰᴀᴍᴢʏ-ᴍᴅ"

// Mode Bot
global.status = false //"self/public" section of the bot

// Saluran Whatsapp
global.idsaluran = "https://whatsapp.com/channel/0029VaGHU1tGpLHSGB4IsU3P"
global.namasaluran = "https://chat.whatsapp.com/BQ2ON2itIIpAQSYUSZrrQL📍"

// Image
global.thumbnail = 'https://pomf2.lain.la/f/c493zv5t.jpg'

//database 
global.urldb = ''; // 
global.themeemoji = '🔥'
global.mess = {
ingroup: "ᴡʜʏ ᴀʀᴇ ʏᴏᴜ ʟɪᴋᴇ ᴛʜɪꜱ 🙆. ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘ 💢",
admin: "ᴛʀʏɪɴɢ ᴛᴏ ʙᴇ ꜰᴜɴɴʏ ᴏʀ ᴡʜᴀᴛ 👓, ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ꜱᴘᴇᴄɪꜰɪᴄᴀʟʟʏ ꜰᴏʀ ᴛʜᴇ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ 💢",
owner: "ʜᴇʜ ʜᴇʜ ʙʟᴀᴄᴋ ᴘᴇᴏᴘʟᴇ ꜱʜᴀ! ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ ꜰᴀᴍᴢʏ ʟᴇᴇ 🗣️",
premium: "ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀ, ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀ ᴍᴇꜱꜱᴀɢᴇ ᴏʀ ʙᴜʏ ꜱᴄʀɪᴘᴛ ꜰʀᴏᴍ *ꜰᴀᴍᴢʏʟᴇᴇ*  ʙʏ ᴛʏᴘɪɴɢ .ᴏᴡɴᴇʀ",
seller: "ᴡʜᴀᴛ ᴀʀᴇ ʏᴏᴜ ᴛʀʏɪɴɢ ᴛᴏ ᴅᴏ, ʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴀᴄᴄᴇꜱꜱ ᴀꜱ ᴀ ꜱᴇʟʟᴇʀ ʏᴇᴛ. ꜱᴏʀʀʏ ꜰᴏʀ ᴛʜᴇ ᴇᴍʙᴀʀʀᴀꜱꜱᴍᴇɴᴛ",
wait: "ᴡᴀɪᴛ ɪɴ ᴘʀᴏᴄᴇꜱꜱɪɴɢ ꜱɪʀ.......",
daftar: "ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ ʏᴇᴛ ꜱᴏʀʀʏ ꜰᴏʀ ᴛʜᴇ ᴇᴍʙᴀʀʀᴀꜱꜱᴍᴇɴᴛ\nᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ .ᴅᴀꜰᴛᴀʀ"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

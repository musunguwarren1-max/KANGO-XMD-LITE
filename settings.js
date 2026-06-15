//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"cDIYI1HUQW8eb12d9geVPlXvyfEyvzGWcTA3lYgIKnw="},"public":{"type":"Buffer","data":"IxEdgEpjJNUUv9MjfjJLnmlHBD9W5IIIDPzAtu+z/DE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WIa53yM6XfX0IIsgaZx1jPCahDS56VtTPzrjlAG2uVI="},"public":{"type":"Buffer","data":"nUxgCc41TfBNm4xq4KJk2wr5RkZD4YV9Oow08BRkfjM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MFsD43ZlC83sAL5rq2ujIzDgzmia2UuDrS6eInEfL0U="},"public":{"type":"Buffer","data":"GNtFm1M3VePn13YvZQEGEz1kRTzvijQIoJAAA0Jm4jQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YHz/wMIx3x2/Ys3j8e73Zfv3kFUMcejsCcUhx6lGcXs="},"public":{"type":"Buffer","data":"dpPojzsD08BhyNM6n4qnN/I/i2NY5sc/8Ep2cw+A2Vs="}},"signature":{"type":"Buffer","data":"q/DuJnNoOh5jKirBhGPA3/4AImQ61G8U5GktuevN8OBY/l4fa2BOrGFx+27A6ySbY0d+aB5TVeBPiNuD/k10Bg=="},"keyId":1},"registrationId":195,"advSecretKey":"SvTVHikALsJbZPDidiNN0OpYQWpWJjnvRtub+3nJ0G4=","processedHistoryMessages":[{"key":{"remoteJid":"254102776096@s.whatsapp.net","fromMe":true,"id":"ACE728E9CA93EA1D8D053F44C1EADE66","participant":"","addressingMode":"pn"},"messageTimestamp":1781520393},{"key":{"remoteJid":"254102776096@s.whatsapp.net","fromMe":true,"id":"ACFB81C70F581CCB8F27F2E8E409889F","participant":"","addressingMode":"pn"},"messageTimestamp":1781520406},{"key":{"remoteJid":"254102776096@s.whatsapp.net","fromMe":true,"id":"ACAA3DBD77E23CD6FC8E554DF0415C0C","participant":"","addressingMode":"pn"},"messageTimestamp":1781520407},{"key":{"remoteJid":"254102776096@s.whatsapp.net","fromMe":true,"id":"ACFDFFFCE48A9B69A4F27C0616746CF8","participant":"","addressingMode":"pn"},"messageTimestamp":1781520407},{"key":{"remoteJid":"254102776096@s.whatsapp.net","fromMe":true,"id":"AC25E6563F9CF352387BA9EBADBAF46D","participant":"","addressingMode":"pn"},"messageTimestamp":1781520437}],"nextPreKeyId":813,"firstUnuploadedPreKeyId":813,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"JVTMMLXN","me":{"id":"254102776096:7@s.whatsapp.net","lid":"126801007399135:7@lid","name":"Warren"},"account":{"details":"COCbjZYBEPavv9EGGAEgACgA","accountSignatureKey":"gGW63NxvyaoqAhtDGj6mtnfhEfnaS7ly5j6X/SmJGQY=","accountSignature":"nUPvcY12i2jYxrnZuJQEL9AMRZ8e6T8WHBB5d+Mq/OSn4E7AhLIfLai/lEU4beeJ9VC7echzIX3DSpOgfE6iCg==","deviceSignature":"xIgZ9G3PKKIXQAOs4UDEeh1SHY+gypeU4bRQdHYmnzrpzJ31uATYxuOXQTiXZw0CZli2NGnMqFHkXvHuzBreAA=="},"signalIdentities":[{"identifier":{"name":"126801007399135:7@lid","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYBlutzcb8mqKgIbQxo+prZ34RH52ku5cuY+l/0piRkG"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAMICQgF"},"lastAccountSyncTimestamp":1781520391,"lastPropHash":"1KsmRm","myAppStateKeyId":"AAAAADm1"}' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254102776096' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['254705127804', '254102776096'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'warren' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Nairobi';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//

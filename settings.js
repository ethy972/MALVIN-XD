const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJKUHNOMjI0Y1I4Zm82Y2JJUTJuYXpxMHJBUmNEVGM2SHBYSVBQUmJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTQ5R0YwWmU5QVgyMUREcG5HeXBnUDV1K2ZSZ2k2bmRWcTJENWdMcmxqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR0hJUU91RzA0cHNqZFZ4RkE5VHhMaThydmhtUHBaaXV4QzQrTGU1am1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQ0NYSkhDMmgraThWWXl1ZklOSkdxdm0vOU9wQ2ZOMXBvNlhxV3JVZUI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHdDFoQ3ZVRmZYenVFMlRUbXZURHAvaS9rR2RVclpuMGNuamR4Vk1NMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklxb3FteTVmZHVOQjY5Y2hQSVZaSER1Tk9VRXRyNVdUbC85ZXFQRzR5M3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1B2ZXRRQU1oa1dmdlB3Z0Nwa0lURnhENVNNRnVTUERMQTNLMkVhU3kydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tqOEZFcXY4MkFGSWQvR0pSU01OeGdqWUpvRjFrUjA0eEh3eTFLMERoWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9kYU1UcFVsdDJEVkc2UmJic0lDYldzTW5wRlpjMDZvNSs2bEROZGJYbWE5dEd1SDZYTFRVenUzNmxjNXlPU0dxWHpJMmJ0dlNZMnhCckc4NjhFUmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiIwNVlxMUR5bnYyb1JpNktzUmhZWEN6MnZrMU9aeWFtT3NFQWhCTi9wMFhzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJISGVMcHhhSVRJbUV5WDBlT0tiYm9BIiwicGhvbmVJZCI6ImQ2OTc5MjY3LTZkOTgtNDllYi1hYTg5LWY2Zjk1YTU3YWMyOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4VXNjL09wVzJMOVd6bkpENVZ1TWNyRzFJb289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUElSeUtNQ3R6SmJuV2xKU3Z6THNoTDZQVGxnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNTQ3MjEzNTA5ODg6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTc2MTM3OTQ0MjcyOToyMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01INDdZUUZFUGJ4d2NnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpqaUFWQUQ3WEp3Vkc1eHM1c3ZWR1hLSEQrTTBwYjJPQUMxOTFjV2JrMUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZNb0pDR1FMWlNaQ0RlejBKc3AvcUJBczA1RE9yWGtLdWttU1cxUzdhSm16QlViQWlYYzd4MmROQ1liMmYvVk4za3kwUThEYjBocFFhSkw4Z2RCZkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJncFdMcndqNjFoMWp0aWNqZUkwM2ZpVStncEgzVDJ4dDIyRmQvMmgxaklXbk1CTXBVOFVuT0dpT0V4Rmx1QUVKN2tnUmp2b2dubDNVd21VM0hVNS9nQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMTM1MDk4ODoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXWTRnRlFBKzF5Y0ZSdWNiT2JMMVJseWh3L2pOS1c5amdBdGZkWEZtNU5TIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJQ3dnUyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjI2ODcyMzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlVZIn0=",
// add your Session Id ,session id starts with MALVIN-XD~

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ v2✦",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react   

STICKER_NAME: process.env.STICKER_NAME || "✦MALVIN-XD✦",
// type sticker pack name  

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀✦",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✦ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ✦*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bddvfr.jpg",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/gld2vo.jpg",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦ᴍᴀʟᴠɪɴ xᴅ✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ v2✦ ғʀᴏᴍ ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/kingmalvn/MALVIN-XD",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto react on status (still testing)

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴍᴀʟᴠɪɴ xᴅ v2🚀🔥✦*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
// make it true for fake recoding 

FAKE_TYPING: process.env.FAKE_TYPING || "false",
// make it true for fake typing

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "263714757857",
//replace with your whatsapp number       
 
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 

CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
// make it true for current status 
};

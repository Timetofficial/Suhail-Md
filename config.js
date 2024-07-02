const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255652248835";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/e74b0e13d71f9bba23422.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_02_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRa0V5YjNBUWw3d2JvREZKV1FJTENMREgvN0IvMXpmTEZLMHRFVGpxSlhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyZ0RjZnRlbVI3aU9sOHk1VnZtQnh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjczMWU4YzExLWE2ZjgtNDk5ZC1iNmI1LWE0MDVlMzc4YmVmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxODksXG4gICAgICAxODMsXG4gICAgICAxNDYsXG4gICAgICAyMzcsXG4gICAgICAxOTMsXG4gICAgICAxMDYsXG4gICAgICAyMjUsXG4gICAgICA5OSxcbiAgICAgIDEwNCxcbiAgICAgIDE5OCxcbiAgICAgIDIwNyxcbiAgICAgIDIxMixcbiAgICAgIDE1MSxcbiAgICAgIDIxOSxcbiAgICAgIDM0LFxuICAgICAgMjIxLFxuICAgICAgNjMsXG4gICAgICAyMDIsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgODcsXG4gICAgICAxODMsXG4gICAgICAyNTAsXG4gICAgICA4MyxcbiAgICAgIDE5MyxcbiAgICAgIDEwNCxcbiAgICAgIDExNyxcbiAgICAgIDM1LFxuICAgICAgMTI5LFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgNzUsXG4gICAgICAyMDIsXG4gICAgICAxOTMsXG4gICAgICAxMTQsXG4gICAgICA1NCxcbiAgICAgIDkzLFxuICAgICAgMTcxLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYxWEw5OUUxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NTIyNDg4MzU6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5OTU2NjE5MjI5NjA2Mzo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYUcvdTBIRUpXSGpiUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ1Vi8vYnkrODFFZysxSUNZVy93ekY5TFZhUnUwMmZuamFVV2tHUzJ4azA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVBMWFc2bnZaUzFKbnoxQUlEU1ZBQWNuVEVvRTg5Vjh1a1V4Wko2WXltak44RllCditZYW8yUTY5Vk9ZUEtOcXpNUklWWGt0WlJ1NXZYRVBxeDJCQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUxBbnFTci8yRm10d0ZRdk1TOUVPcVJvUi94VWxLcnFSZkdsci91WUorYW1peDlHeHcvR3hSUzdqbjJUajRPbnpiYUZ0NTVZcDFZWVc2V2l4Ry9kRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjUyMjQ4ODM1OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODc4NTUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TEZLRm01aXZuSTdCWGpxQ2IwYkl0a0xiM2ZtejA4a2laejhXTzVHSm1JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDk3MDMwMDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4MzY1MzE2MDkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "X",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MR HEISME",
  packname: process.env.PACK_NAME || "MR HEISME",
  botname : process.env.BOT_NAME  || "MR HEISME-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "MR HEISME",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

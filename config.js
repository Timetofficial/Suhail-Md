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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODFDckJLZ1RXd0M1YmMyRkUzNWdqd1FNMmFVNjczTWdhaEVXbHQ0OW9LQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaG1FMVo3a0FTZnVTZ2VSX0tsN25EQVwiLFxuICBcInBob25lSWRcIjogXCIzNThjZGU5NC1hMjA1LTQzNzctYTc0Yy03NDhkNjkzNWI2ZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyMzAsXG4gICAgICA1MCxcbiAgICAgIDIyMixcbiAgICAgIDE1MCxcbiAgICAgIDIzMSxcbiAgICAgIDIzMSxcbiAgICAgIDE0LFxuICAgICAgMTIsXG4gICAgICAxODQsXG4gICAgICAzOSxcbiAgICAgIDYwLFxuICAgICAgMTc5LFxuICAgICAgMjA4LFxuICAgICAgNDQsXG4gICAgICAxMzYsXG4gICAgICAzNSxcbiAgICAgIDk5LFxuICAgICAgMzgsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICA5LFxuICAgICAgMTA3LFxuICAgICAgMTgxLFxuICAgICAgOTEsXG4gICAgICAyNTMsXG4gICAgICAxMzgsXG4gICAgICAyMzcsXG4gICAgICA0NyxcbiAgICAgIDksXG4gICAgICA0MixcbiAgICAgIDE1NixcbiAgICAgIDUsXG4gICAgICAxOTMsXG4gICAgICAxNjMsXG4gICAgICA0NyxcbiAgICAgIDIyOSxcbiAgICAgIDYwLFxuICAgICAgMjE3LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5EUEdQUVlQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NTIyNDg4MzU6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5OTU2NjE5MjI5NjA2Mzo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYUcvdTBIRUpYZWlyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ1Vi8vYnkrODFFZysxSUNZVy93ekY5TFZhUnUwMmZuamFVV2tHUzJ4azA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3ZIdHcwTldHZmN4Y25JR0Z4SVk0blhyQmROTGI0RnhBVENvKzh6M2dMckdid2s2QkxEZVZhUWgrLzMrOGM3UEFrbGkwTU9YcHZRY2FMTXlEaHVGQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXpibmxhRmhELzM4YTl2ZHQwUm9rTUZlM2tTVTU1RFJ0NnNuWHBhRXRZZDRFMkcvNmRtNUliRytENU1zMzdKaUNGSUNmY3FlZU5iL2dRRUZDbTlpRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjUyMjQ4ODM1OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODQwNTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TEZLRm01aXZuSTdCWGpxQ2IwYkl0a0xiM2ZtejA4a2laejhXTzVHSm1JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDk3MDMwMDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4MzY1MzE2MDkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "M",
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

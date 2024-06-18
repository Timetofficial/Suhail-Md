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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_10_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnFyQjlKTndzVXduUU12M2RDcEI3bDBTamJtcUF1Umk4cVFFZThmSE1tdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVEyMDEyZTNUYmFWcjFZUlFVVnRFd1wiLFxuICBcInBob25lSWRcIjogXCIxNTBhODBjMS04MjBhLTQ5ZWMtODhiYS1jZTFmZGFjZjAxMDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNjksXG4gICAgICAxOSxcbiAgICAgIDEyNixcbiAgICAgIDE2NCxcbiAgICAgIDgyLFxuICAgICAgMjA0LFxuICAgICAgMjQyLFxuICAgICAgNDksXG4gICAgICAxNzAsXG4gICAgICA3NCxcbiAgICAgIDMyLFxuICAgICAgNzIsXG4gICAgICAxODgsXG4gICAgICAxNzIsXG4gICAgICAxNTgsXG4gICAgICA3NSxcbiAgICAgIDM4LFxuICAgICAgMjUyLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDI0LFxuICAgICAgMzEsXG4gICAgICAxNTMsXG4gICAgICA3MSxcbiAgICAgIDExMCxcbiAgICAgIDEzMSxcbiAgICAgIDE4MSxcbiAgICAgIDI0MCxcbiAgICAgIDEwMyxcbiAgICAgIDE2NCxcbiAgICAgIDQzLFxuICAgICAgMjMxLFxuICAgICAgMjQwLFxuICAgICAgMTI5LFxuICAgICAgMTQzLFxuICAgICAgNzMsXG4gICAgICAxMjAsXG4gICAgICAxMTcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVNHSExHQzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY1MjI0ODgzNTo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk5NTY2MTkyMjk2MDYzOjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LRy91MEhFSjI2eGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnVWLy9ieSs4MUVnKzFJQ1lXL3d6RjlMVmFSdTAyZm5qYVVXa0dTMnhrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTVzZjeFlGdGMrM2FiZGIyNUJKL1haZlVGRWlsREora3l2MHZhSXd0T0ZlckFJQUVGVFB6bm1XSjNlS3MyMEF5YVRKS054amNDWWVSVHFPUitZUjNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3a3NiOVo5VXZTcHFZbkJFbmw0aDhwb2hGRm5UVjRuaElnU3lrS1JCUTJ4Ym9DQldwWkF3OXN5cE9paFhJS2JrRWM5cjhyOHBNbVVweXdhMllXK21Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2NTIyNDg4MzU6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MDU0NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMkZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUyRi5qc29uIjogIntcImtleURhdGFcIjpcIjVMRktGbTVpdm5JN0JYanFDYjBiSXRrTGIzZm16MDhraVp6OFdPNUdKbUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwOTcwMzAwNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNjUzMTYwOTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "V",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MR HEISME ",
  packname: process.env.PACK_NAME || "MR HEISME",
  botname : process.env.BOT_NAME  || "MR HEISME-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "HEISME",


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

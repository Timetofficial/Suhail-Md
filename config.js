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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_55_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzS2duMEdoSm85b2RXaWw1Umh3Sm1BZWZ5TlVHL01kb1N2eG5RaFE0ZWtNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1aWRpMTRUVFNSU1JUa3JDc01nZllRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhZjkzMDdlLWNhMDgtNDJhYy04NmRjLWVlZWFjNDcyZTcyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDEzMyxcbiAgICAgIDIwNyxcbiAgICAgIDg5LFxuICAgICAgNDcsXG4gICAgICA0MCxcbiAgICAgIDEzOCxcbiAgICAgIDg1LFxuICAgICAgNTUsXG4gICAgICAyMjUsXG4gICAgICAxMyxcbiAgICAgIDY4LFxuICAgICAgMjE2LFxuICAgICAgNjMsXG4gICAgICAxOTgsXG4gICAgICAyMzksXG4gICAgICA0OSxcbiAgICAgIDIxOSxcbiAgICAgIDE2OSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE5NixcbiAgICAgIDIxMixcbiAgICAgIDU4LFxuICAgICAgMTQ2LFxuICAgICAgMTc4LFxuICAgICAgMTQ1LFxuICAgICAgMjA1LFxuICAgICAgNzMsXG4gICAgICAyMTYsXG4gICAgICAzNyxcbiAgICAgIDEwNSxcbiAgICAgIDE0MCxcbiAgICAgIDE0MCxcbiAgICAgIDIzNixcbiAgICAgIDIyOCxcbiAgICAgIDUsXG4gICAgICAyNTAsXG4gICAgICAxMjEsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5WDg0VkJCUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjUyMjQ4ODM1OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTk1NjYxOTIyOTYwNjM6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dHL3UwSEVQRGV4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSdVYvL2J5KzgxRWcrMUlDWVcvd3pGOUxWYVJ1MDJmbmphVVdrR1MyeGswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklCUFoyVFNQZDd6M0o0V3BiamtpWHVPaVRxN2J5SGZQbHN6YjZ3NUZkSEFVb3B0RGdnMFNzMFJ6S01iSkdUbTFYVnpGbEdsU3hjOWo4T2RaNUNvZkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlQwMzlvR1BwSTMvWXFTMjFSeFI4WFIxODZHWkNOd0swQWozclkxbXViVmFYbnVpVW16aVhKbjhIamVTWHpTcFErZXQzL3JIQ0NtTnFyZnkwbm5kL0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY1MjI0ODgzNTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODY5Mzc0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUxGS0ZtNWl2bkk3QlhqcUNiMGJJdGtMYjNmbXowOGtpWno4V081R0ptST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA5NzAzMDA2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxODM2NTMxNjA5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

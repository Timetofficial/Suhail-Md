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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2970fb4911c462ef864aa.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_16_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImF0UTNzdmxpVWRIR2Qwa1ViMVVCMHJmRXlyKyszb3pHZmFrcmZMT3hZMXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJEQWg2aF9BUXFpdzY5eTVnMzREdFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzM4NjI5NmItNzA2NS00YWFjLWI2Y2UtODU3MWM2NDdiODBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE4MCxcbiAgICAgIDc2LFxuICAgICAgMzYsXG4gICAgICAxOTcsXG4gICAgICAzMCxcbiAgICAgIDEzOSxcbiAgICAgIDEzNCxcbiAgICAgIDc4LFxuICAgICAgMzUsXG4gICAgICAxNjMsXG4gICAgICAxMTYsXG4gICAgICAxMDUsXG4gICAgICAxMzYsXG4gICAgICA3NCxcbiAgICAgIDIxMCxcbiAgICAgIDE4OCxcbiAgICAgIDEzOCxcbiAgICAgIDk3LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMTg2LFxuICAgICAgMTE2LFxuICAgICAgMTMsXG4gICAgICAyNSxcbiAgICAgIDIyOCxcbiAgICAgIDEzNSxcbiAgICAgIDE4NyxcbiAgICAgIDI4LFxuICAgICAgOTQsXG4gICAgICAxNTAsXG4gICAgICAyMDEsXG4gICAgICAyMjQsXG4gICAgICAyMzAsXG4gICAgICAzOCxcbiAgICAgIDMwLFxuICAgICAgNDksXG4gICAgICAyOSxcbiAgICAgIDE2MixcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzNUwyTUUxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjUyMjQ4ODM1OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTk1NjYxOTIyOTYwNjM6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NHL3UwSEVOM2Z5ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSdVYvL2J5KzgxRWcrMUlDWVcvd3pGOUxWYVJ1MDJmbmphVVdrR1MyeGswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRWSE16bGxzYnM4Z0huWlhOc0hvQ2Z1bjZBZjQxOEFTNEl1dXFENGU2azArMDNEOWEwVzRuM3JTbkhtUHlTd1pEZ3ZhNjJiZzQ4dkFzQVN0T3Nod0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpUSnZLVDBNZWFySThYV3M0Snh3dXNtNUQ2UGp0ancxUi9EeUZ0SVVLdEd0Zjd5dFA3MkFsQ3VWVE90WTBHdHp0QWx3SWtJZ29NeW1CRXQ0VlFHMkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY1MjI0ODgzNTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc5MjE2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUxGS0ZtNWl2bkk3QlhqcUNiMGJJdGtMYjNmbXowOGtpWno4V081R0ptST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA5NzAzMDA2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxODM2NTMxNjA5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "V",
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
  LANG: ( process.env.THEME ||  "MR HEISME"  ).toUpperCase(),



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

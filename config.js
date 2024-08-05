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
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlEydWNHVUtIRTlwQzFEYitZNWZXWldiRnZDSzlKWTVOU05ta0FSajY1WWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDYzMDE5MDExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MEEzQUM2MDFGNTRGMTNENjJDNEY0MDVDN0Q1QjJFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4OTQxOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwNjMwMTkwMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzN0IxREM0NTVDQTUwNzIxN0E1NUFBNkYxNjk0RTk2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg5NDE5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwSkVCdmVzRVFRcUxLMVVEdzBtdmVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4N2RmODMwLTUxOTgtNGU1NC1iNTU1LTM1Njc1MzliMjY1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDQzLFxuICAgICAgMTAsXG4gICAgICAxNjcsXG4gICAgICAyNDksXG4gICAgICAyNixcbiAgICAgIDkxLFxuICAgICAgMTExLFxuICAgICAgMTY0LFxuICAgICAgMjU0LFxuICAgICAgMTU4LFxuICAgICAgNTgsXG4gICAgICAxODUsXG4gICAgICA2NSxcbiAgICAgIDYsXG4gICAgICAxNDgsXG4gICAgICAxOSxcbiAgICAgIDE0NixcbiAgICAgIDIyMCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMjUwLFxuICAgICAgMTQ0LFxuICAgICAgNzcsXG4gICAgICAxODIsXG4gICAgICA5OSxcbiAgICAgIDE3MSxcbiAgICAgIDE4NSxcbiAgICAgIDMwLFxuICAgICAgMTIwLFxuICAgICAgMTEzLFxuICAgICAgMzIsXG4gICAgICAyMDEsXG4gICAgICAxMDcsXG4gICAgICAyMjgsXG4gICAgICA5NSxcbiAgICAgIDgsXG4gICAgICA0MixcbiAgICAgIDg2LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhTVEtOWFpaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwNjMwMTkwMTE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTQzODI0Nzk2ODgzODoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPbWFyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJYbTdRSEVPbU94YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaZDdKWDZTU2Q2RVg2SDRuamwwTnAzMDN2K0JiL0VJR2dWMUtKaWRtVmowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJNa043NEtCTW9PdDVOYW5IKzNLQllwWDV0TEdTSlVqRWRYZlZTNllLSE8yaWV3RU0yTXBjVFlYNU5PdlJFSis1Zy9vQVpjbjMyazRoS1hOcFR5QkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBpM2lPMEkxdWVtR0QzVDd5S3NDQWpTaVlOSXMzb2lOSEEzU3VjVFh2UHBydDVOZkFwVTI3czlFQkh3KzFmT253UmZYWlRDRitMWlhvWnFDVW5SVGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIwMTA2MzAxOTAxMToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODk0MTg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWRyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdmlBUTFRdllhb1JhcDVHWHplazFZamFEOWp3TisxTUR4b3FQUW1Cd1hRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODg1NTM2NzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg4OTM4OTkyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "mr OMAR",
  packname: process.env.PACK_NAME || "mr OMAR",
  botname : process.env.BOT_NAME  || "𝙊𝙈𝘼𝙍 ⁪⁬⁮⁮⁮⁮‌‌‌‌𝘼𝙇™〈⇒آلَٰـُـٰٓڪَٰـُـٰٓآرفَٰ͒ـُـٰٓ〉⛥ᯤ 🎫",
  ownername:process.env.OWNER_NAME|| "ounkel omar",


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

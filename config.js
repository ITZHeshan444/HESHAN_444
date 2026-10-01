const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/ITZHeshan444/HESHAN_444/blob/main/images/photo_2026-09-27_18-46-43.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Heshan_444 Is Alive Now😍*",
BOT_OWNER: '94702834696',  // Replace with the owner's phone number



};

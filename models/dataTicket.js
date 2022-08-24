const mongoose = require('mongoose');

const dataTicket = new mongoose.Schema({
	guildID: String,
    ownerID: String,
    channelName: String,
    channelID: String,
    ticketPanel: String,
    parentID: String,
    dateCreated: Date,
    isClosed: Boolean,
    isClaimed: Boolean,
    staffClaimed: String,
    staffRoles: Array,
    usersInTicket: Array,
});

module.exports = mongoose.model('dataTicket', dataTicket, 'dataTicket');


//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 
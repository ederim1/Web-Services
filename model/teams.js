const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// Schema needed to build a new player
const teamsSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    championships: {
        type: String,
        required: true
    },
    
    numberOfPlayers: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
});
const teamSchema = model('team', teamsSchema);

module.exports =  teamSchema;
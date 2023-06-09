const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// Schema needed to build a new player
const playersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    position: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});
const playerSchema = model('player', playersSchema);

module.exports =  playerSchema;
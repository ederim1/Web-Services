const express = require('express');
const playerSchema = require("../model/players");


// create players
const createPlayer =  (req, res) => {
    const player = playerSchema(req.body);
    const { firstName, lastName, position, birthday, salary} = req.body;
    player
        .save({
            firstName: firstName,
            lastName: lastName,
            position: position,
            birthday: birthday,
            salary: salary
        })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Get players
const getPlayers = (req, res) => {
    const player = playerSchema(req.body);
    playerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Get players by ID
const getPlayerById = (req, res) => {
    const { id } = req.params; 
    playerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Modify players by ID
const modifyPlayer = (req, res) => {
    const { id } = req.params; 
    const { firstName, lastName, email, position, birthday } = req.body;
    playerSchema
        .updateOne({ _id: id }, { $set:{ firstName, lastName, email, position, birthday } })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Delete players by ID
const deletePlayerById = (req, res) => {
    const { id } = req.params;
    playerSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};


module.exports = {getPlayers, getPlayerById, createPlayer, modifyPlayer, deletePlayerById} ;

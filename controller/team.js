const express = require('express');
const teamSchema = require("../model/teams");


// create teams
const createTeam =  (req, res) => {
    const team = teamSchema(req.body);
    const { teamName, championships, numberOfPlayers, city, value, coach, color} = req.body;
    team
        .save({
            teamName: teamName,
            championships: championships,
            numberOfPlayers: numberOfPlayers,
            city: city,
            value: value,
            coach:coach,
            color:color
        })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Get teams
const getTeams = (req, res) => {
    const team = teamSchema(req.body);
    teamSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Get teams by ID
const getTeamById = (req, res) => {
    const { id } = req.params; 
    teamSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Modify teams by ID
const modifyTeam = (req, res) => {
    const { id } = req.params; 
    const { teamName, championships, numberOfPlayers, city, value, coach, color } = req.body;
    teamSchema
        .updateOne({ _id: id }, { $set:{ teamName, championships, numberOfPlayers, city, value, coach, color } })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};

// Delete teams by ID
const deleteTeamById = (req, res) => {
    const { id } = req.params;
    teamSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
};


module.exports = {getTeams, getTeamById, createTeam, modifyTeam, deleteTeamById} ;

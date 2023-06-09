const express = require('express');
const router = express.Router();
const teams = require('../controller/team.js')

// Create player
router.post('/teams', teams.createTeam);

// Get teams
router.get('/teams', teams.getTeams);

// Get teams by ID
router.get('/teams/:id', teams.getTeamById);

// Modify teams by ID
router.put('/teams/:id', teams.modifyTeam);

// Delete teams by ID
router.delete('/teams/:id', teams.deleteTeamById);


module.exports = router;

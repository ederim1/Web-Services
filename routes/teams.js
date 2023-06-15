const express = require('express');
const router = express.Router();
const teams = require('../controller/team.js');
const { requiresAuth } = require('express-openid-connect');

// Create player
router.post('/', teams.createTeam);

// Get teams
router.get('/', teams.getTeams);

// Get teams by ID
router.get('/:id', teams.getTeamById);

// Modify teams by ID
router.put('/:id', teams.modifyTeam);

// Delete teams by ID
router.delete('/:id', teams.deleteTeamById);
// router.delete('/teams/:id', requiresAuth(), teams.deleteTeamById); 

module.exports = router;

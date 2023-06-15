const express = require('express');
const router = express.Router();
const players = require('../controller/player');
const { requiresAuth } = require('express-openid-connect');

// Create player
router.post('/', players.createPlayer);

// Get players
router.get('/', players.getPlayers);

// Get players by ID
router.get('/:id', players.getPlayerById);

// Modify players by ID
router.put('/:id', players.modifyPlayer);

// Delete players by ID
router.delete('/:id', players.deletePlayerById);


module.exports = router;

const express = require('express');
const router = express.Router();
const players = require('../controller/player')

// Create player
router.post('/players', players.createPlayer);

// Get players
router.get('/players', players.getPlayers);

// Get players by ID
router.get('/players/:id', players.getPlayerById);

// Modify players by ID
router.put('/players/:id', players.modifyPlayer);

// Delete players by ID
router.delete('/players/:id', players.deletePlayerById);


module.exports = router;

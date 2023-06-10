const express = require('express');
const router = express.Router();


// add oath0 code here 

router.use("/players", require("./players"));
router.use("/teams", require("./teams"));

module.exports = router;


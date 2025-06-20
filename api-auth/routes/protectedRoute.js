const express = require('express');
const router = express.Router();

router.get("/", (req, res) => { 
    res.json({message: "You have access to protected data"})
})

module.exports = router
const express = require('express');
const router = express.Router();

router.get('/get-data', (req, res) => {
    let data = {
        name: 'Shane',
        age: '18'
    }
});

module.exports = router;

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        messagw: 'World',
    });
});

router.post('/', (req, res) => {
    res.json({
        messagw: 'World',
    });
});

module.exports = router;
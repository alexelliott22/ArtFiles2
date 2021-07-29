const router = require('express').Router();
const { Artwork, Museum, Artist } = require('../models');

// get all posts
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    })
});

//login route
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login', {
            loggedIn: req.session.loggedIn
        })
        
        
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
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

router.get('/artwork/:id', (req, res) => {
    Artwork.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'medium',
            'created_at',
            'date',
            'style',
            'location',
            'image_url'
        ],
        include: [
            {
                model: Museum,
                attributes: ['username']
            },
            {
                model: Artist,
                attributes: ['artist_name']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        // serialize the data
        const post = dbPostData.get({ plain: true });

        // pass data to template
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log('failed to get post');
        res.status(500).json(err);
    });
})

module.exports = router;
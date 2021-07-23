const router = require('express').Router();
const { Artwork, Museum, Artist } = require('../models');

// get all posts
router.get('/', (req, res) => {
    Artwork.findAll({
        attributes: [
            'id',
            'title',
            'medium',
            'created_at',
            'date',
            'style',
            'location',
            'artist_name'
        ],
        include: [
            {
                model: Museum,
                attributes: ['username']
            },
            {
                model: Artist,
                attributes: 'artist_name'
            }
        ]
    })
        .then(dbPostData => {
            //pass a single post object into the homepage
            const posts = dbPostData.map(post => post.get({ plain: true }))
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log('Failed to get posts');
            res.status(500).json(err);
        })
});

//login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

router.get('/post/:id', (req, res) => {
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
            'artist_name'
        ],
        include: [
            {
                model: Museum,
                attributes: ['username']
            },
            {
                model: Artist,
                attributes: 'artist_name'
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
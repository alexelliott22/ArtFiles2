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
            'location'
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
        //pass a single post object into the homepage
        const posts = dbPostData.map(post => post.get({ plain: true }))
        res.render('all-artwork', {posts});
    })
    .catch(err => {
        console.log('Failed to get posts');
        res.status(500).json(err);
    })
});

module.exports = router;
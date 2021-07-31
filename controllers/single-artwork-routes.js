const router = require('express').Router();
const { Artwork, Museum, Artist } = require('../models');

router.get('/:id', (req, res) => {
    Artwork.findOne({
        where: {
            id: req.params.id
        },
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
        
        //can we change to single-artwork
        res.render('single-artwork', {
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
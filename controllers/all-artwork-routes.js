const router = require('express').Router();
const { Artwork, Museum, Artist } = require('../models');
const sequelize = require('sequelize');

// get all posts
router.get('/', async (req, res) => {
    try {
        
        let artwork;

        if(req.query.filter) {
            artwork = await Artwork.findAll({
                where: {
                    [sequelize.Op.or]: [
                        {
                            title: {
                            [sequelize.Op.like]: `%${req.query.filter}%`
                            }
                        },
                        {
                            medium: {
                            [sequelize.Op.like]: `%${req.query.filter}%`
                            }
                        },
                        {
                            style: {
                            [sequelize.Op.like]: `%${req.query.filter}%`
                            }
                        }
                    ]
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
        } else {
            artwork = await Artwork.findAll({
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
        }
        

        //pass a single post object into the homepage
        const posts = artwork.map(post => post.get({ plain: true }))
        res.render('all-artwork', {posts});

    } catch (error) {
        console.log('Failed to get posts');
        console.log(error);
        res.status(500).json(error);
        
    }    
});

router.get('/single-artwork/:id', (req, res) => {
    Artwork.findOne({
        where: {
            id: req.params.id
        },attributes: [
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
        //can we change to single-artwork
        res.render('single-artwork', {
            post
        });
    })
    .catch(err => {
        console.log('failed to get post');
        res.status(500).json(err);
    });
})

module.exports = router;
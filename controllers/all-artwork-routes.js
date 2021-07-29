const router = require('express').Router();
const { Artwork, Museum, Artist } = require('../models');
const Sequelize = require('sequelize');

// get all posts
router.get('/', async (req, res) => {
    try {
        
        let artwork;

        if(req.query.filter) {
            artwork = await Artwork.findAll({
                where: {
                    [Sequelize.Op.or]: [
                        
                        {
                            title: {
                            [Sequelize.Op.like]: `%${req.query.filter}%`
                            }
                        },
                        {
                            medium: {
                            [Sequelize.Op.like]: `%${req.query.filter}%`
                            }
                        },
                        {
                            style: {
                            [Sequelize.Op.like]: `%${req.query.filter}%`
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

module.exports = router;
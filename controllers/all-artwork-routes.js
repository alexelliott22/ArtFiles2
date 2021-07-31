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
        res.render('all-artwork', {posts, loggedIn: req.session.loggedIn});

    } catch (error) {
        console.log('Failed to get posts');
        console.log(error);
        res.status(500).json(error);
        
    }    
});

module.exports = router;
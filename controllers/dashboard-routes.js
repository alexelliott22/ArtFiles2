const router = require('express').Router();
const { Artwork, Museum, Artist} = require('../models');

//get all posts for an individual user
// GET /dashboard
router.get('/', (req, res) => {  
  Artwork.findAll({
      // where: {
      //   museum_id: req.session.user_id
      // },
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
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));

        console.log(posts)
    
        res.render('artwork-dashboard', { posts, loggedIn: true, layout: 'main'});
    })
    .catch(err => {
        console.log('failed to get posts');
        res.status(500).json(err);
    });
});

//this route gives the user the ability to edit a post
router.get('/edit/:id', (req, res) => {
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
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      })
      .catch(err => {
        console.log('failed to edit posts');
        res.status(500).json(err);
      });
  })
  
  module.exports = router;
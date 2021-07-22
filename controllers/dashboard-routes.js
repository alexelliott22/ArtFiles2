const router = require('express').Router();
const { Post, User} = require('../models');

//get all posts for an individual user
router.get('/', (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
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
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log('failed to get posts');
        res.status(500).json(err);
    });
});

//this route gives the user the ability to edit a post
router.get('/edit/:id', (req, res) => {
    Post.findOne({
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
          model: User,
          attributes: ['username']
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
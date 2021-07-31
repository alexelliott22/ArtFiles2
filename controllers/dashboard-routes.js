const router = require('express').Router();
const { Artwork, Museum, Artist} = require('../models');

//get all posts for an individual user
// GET /dashboard
router.get('/', (req, res) => {  
  Artwork.findAll({
      where: {
        museum_id: req.session.museum_id
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
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
    
        res.render('artwork-dashboard', { posts, loggedIn: true, layout: 'dashboard'});
    })
    .catch(err => {
        console.log('failed to get posts');
        res.status(500).json(err);
    });
});
  
module.exports = router;
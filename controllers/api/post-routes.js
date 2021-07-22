const router = require('express').Router();
const { Post, User} = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
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
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to get posts');
        res.status(500).json(err);
    });
});

//get individual post
router.get('/:id', (req, res) => {
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
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('Failed to get post');
        res.status(500).json(err);
    });
});

//create new post
router.post('/', (req, res) => {
    Post.create({
      title: req.body.title,
      medium: req.body.medium,
      artist_name: req.body.artist_name,
      date: req.body.date,
      style: req.body.style,
      location: req.body.location,
      user_id: req.session.user_id

    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to add post');
        res.status(500).json(err);
    });
});

//edit post
router.put('/:id', (req, res) => {
    Post.update(
      {
        location: req.body.location
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('Failed to edit post');
        res.status(500).json(err);
    });
});

//delete post
router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('failed to delete post');
        res.status(500).json(err);
    });
});

module.exports = router;
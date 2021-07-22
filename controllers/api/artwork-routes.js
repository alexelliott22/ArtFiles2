const router = require('express').Router();
const { Artwork, Museum, Artist} = require('../../models');

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
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to get posts');
        res.status(500).json(err);
    });
});

//get individual artwork
router.get('/:id', (req, res) => {
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
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('Failed to get post');
        res.status(500).json(err);
    });
});

//create new artwork
router.post('/', (req, res) => {
    Artwork.create({
      title: req.body.title,
      medium: req.body.medium,
      date: req.body.date,
      style: req.body.style,
      location: req.body.location,
      museum_id: req.session.museum_id,
      artist_id: req.body.artist_id

    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to add post');
        res.status(500).json(err);
    });
});

//edit artwork
router.put('/:id', (req, res) => {
    Artwork.update(
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

//delete artwork
router.delete('/:id', (req, res) => {
    Artwork.destroy({
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
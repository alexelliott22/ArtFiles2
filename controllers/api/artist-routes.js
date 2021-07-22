const router = require('express').Router();
const { Artwork, Museum, Artist} = require('../../models');

// get all artists
router.get('/', (req, res) => {
    Artist.findAll({
      attributes: [
        'id',
        'artist_name',
        'birth_death'
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to get artists');
        res.status(500).json(err);
    });
});

//get individual artist
router.get('/:id', (req, res) => {
    Artist.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'artist_name',
        'birth_death'
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No artist found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('request Failed to get artist by this id');
        res.status(500).json(err);
    });
});

//create new artist
router.post('/', (req, res) => {
    Artist.create({
      artist_name: req.body.artist_name,
      birth_death: req.body.birth_death
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log('Failed to add artist');
        res.status(500).json(err);
    });
});


//delete artist
router.delete('/:id', (req, res) => {
    Artist.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No artist found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log('failed to delete artist');
        res.status(500).json(err);
    });
});

module.exports = router;
const router = require('express').Router();

const museumRoutes = require('./user-routes');
const artworkRoutes = require('./post-routes');
const artistRoutes = require('./artist-routes');

router.use('/users', museumRoutes);
router.use('/artwork', artworkRoutes);
router.use('/artists', artistRoutes);

module.exports = router;
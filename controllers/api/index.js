const router = require('express').Router();

const museumRoutes = require('./museum-routes');
const artworkRoutes = require('./artwork-routes');
const artistRoutes = require('./artist-routes');

router.use('/museum', museumRoutes);
router.use('/artwork', artworkRoutes);
router.use('/artists', artistRoutes);

module.exports = router;
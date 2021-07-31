const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes')
const allArtRoutes = require('./all-artwork-routes')
const singleArtRoutes = require('./single-artwork-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/all-artwork', allArtRoutes);
router.use('/single-artwork', singleArtRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
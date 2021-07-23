const artistSeeds = require('./artist-seeds');
const worksSeeds = require('./works-seeds');
const museumSeeds = require('./museum-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true})
    await artistSeeds();
    await museumSeeds();
    await worksSeeds();
    //terminates function
    process.exit(0);
}

seedAll();


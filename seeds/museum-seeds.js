const { Museum } = require('../models');

const museumData = [

{
    name: 'The Metropolitain Museum of Art',
    username: 'metNY',
    email: 'curator@metmuseum.org',
    password: 'password123'
},
{
    name: 'Museum of Modern Art',
    username: 'modernart',
    email: 'curator@moma.org',
    password: 'password222'
},
{
    name: 'The National Gallery',
    username: 'nationalgallery',
    email: 'curator@nationalgallery.org',
    password: 'password333'
},
{
    name: 'The Louvre',
    username: 'lourve',
    email: 'curator@louvre.fr',
    password: 'password444'
},
{
    name: 'The Courtauld Gallery',
    username: 'courtgallery',
    email: 'curator@courtauld.uk',
    password: 'password555'
},
];

const seedMuseums = () => Museum.bulkCreate(museumData);

module.exports = seedMuseums;
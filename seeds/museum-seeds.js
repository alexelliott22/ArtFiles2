const { Museum } = require('../models');

const museumData = [

{
    username: 'The Metropolitain Museum of Art',
    email: 'curator@metmuseum.org',
    password: 'password123'
},
{
    username: 'Museum of Modern Art',
    email: 'curator@moma.org',
    password: 'password222'
},
{
    username: 'The National Gallery',
    email: 'curator@nationalgallery.org',
    password: 'password333'
},
{
    username: 'The Louvre',
    email: 'curator@louvre.fr',
    password: 'password444'
},
{
    username: 'The Courtauld Gallery',
    email: 'curator@courtauld.uk',
    password: 'password555'
},
];

const seedMuseums = () => Museum.bulkCreate(museumData, {
    individualHooks: true,
    validate: true
});
// const seedMuseums = () => {
//     museumData.forEach(async(data) => {
//         await Museum.create(data)
//     });
// }

module.exports = seedMuseums;
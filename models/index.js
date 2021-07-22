const Artwork = require('./Artwork');
const Museum = require('./Museum');
const Artist = require('./Artist');

Museum.hasMany(Artwork, {
    foreignKey: 'museum_id'
});

Artwork.belongsTo(Museum, {
    foreignKey: 'museum_id',
    onDelete: 'SET NULL'

});

Artwork.hasOne(Artist, {
    foreignKey: 'artist_id',
    onDelete: 'SET NULL'  
});

Artist.hasMany(Artwork, {
    foreignKey: 'artist_id',
});


module.exports = { Artwork, Museum, Artist }
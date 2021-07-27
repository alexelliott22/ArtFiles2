const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artwork extends Model { }

Artwork.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        museum_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'museum',
                key: 'id'
            }
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'artist',
                key: 'id'
            }
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'artwork'
    }
);

module.exports = Artwork;
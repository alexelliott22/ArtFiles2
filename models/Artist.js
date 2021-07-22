const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artist extends Model { }

Artist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        death_date: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'artist'
    }
);

module.exports = Artist;
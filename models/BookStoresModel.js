const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const BookStores = sequelize.define('BookStores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        get() {
            return this.getDataValue('createdAt')?.toISOString().split('T')[0];
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        get() {
            return this.getDataValue('updatedAt')?.toISOString().split('T')[0];
        }
    },
}, {
    tableName: 'BookStores',
    timestamps: true,
});

BookStores.prototype.toJSON = function () {
    return {
        id: this.id,
        name: this.name,
        address: this.address,
        phoneNumber: this.phoneNumber,
        email: this.email,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

module.exports = BookStores;

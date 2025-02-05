const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const Authors = sequelize.define('Authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
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
    tableName: 'Authors',
    timestamps: true,
});

Authors.prototype.toJSON = function () {
    return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

module.exports = Authors;

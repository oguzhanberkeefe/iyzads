const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const Inventory = sequelize.define('Inventory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookstoreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
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
    tableName: 'Inventory',
    timestamps: true,
});

Inventory.prototype.toJSON = function () {
    return {
        id: this.id,
        bookId: this.bookId,
        bookstoreId: this.bookstoreId,
        quantity: this.quantity,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

module.exports = Inventory;

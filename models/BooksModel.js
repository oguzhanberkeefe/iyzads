const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const Books = sequelize.define('Books', {
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
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        get() {
            return parseFloat(this.getDataValue('price'));
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bookStoreId: {
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
    tableName: 'Books',
    timestamps: true,
});

Books.prototype.toJSON = function () {
    return {
        id: this.id,
        name: this.name,
        desc: this.desc,
        quantity: this.quantity,
        authorId: this.authorId,
        bookStoreId: this.bookStoreId,
        price: this.price,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

module.exports = Books;

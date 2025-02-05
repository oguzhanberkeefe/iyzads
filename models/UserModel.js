const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookStoreId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastLoginDate: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            return this.getDataValue('lastLoginDate')?.toISOString().split('T')[0];
        }
    },
    role: {
        type: DataTypes.ENUM('ADMIN', 'USER', 'STOREMANAGER'),
        allowNull: false,
        defaultValue: 'USER',
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
    tableName: 'User',
    timestamps: true,
});

User.prototype.toJSON = function () {
    return {
        id: this.id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        bookStoreId: this.bookStoreId,
        ipAddress: this.ipAddress,
        role: this.role,
        lastLoginDate: this.lastLoginDate,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

module.exports = User;

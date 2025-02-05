const { DataTypes } = require('sequelize');
const sequelize = require('../helpers/DatabaseHelper');

const UserLoginLogs = sequelize.define('UserLoginLogs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginDate: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            return this.getDataValue('loginDate')?.toISOString().split('T')[0];
        }
    },
    browser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deviceInfo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    osInfo: {
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
    }
}, {
    tableName: 'UserLoginLogs',
    timestamps: true,
});

UserLoginLogs.prototype.toJSON = function () {
    return {
        id: this.id,
        userId: this.userId,
        ipAddress: this.ipAddress,
        loginDate: this.loginDate,
        browser: this.browser,
        deviceInfo: this.deviceInfo,
        osInfo: this.osInfo,
        createdAt: this.createdAt
    };
};

module.exports = UserLoginLogs;

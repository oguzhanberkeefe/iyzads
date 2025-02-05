const User = require('./UserModel');
const BookStores = require('./BookStoresModel');
const Books = require('./BooksModel');
const Inventory = require('./InventoryModel');
const Authors = require('./AuthorsModel');
const UserLoginLogs = require('./UserLoginLogsModel');

User.hasMany(UserLoginLogs, { foreignKey: 'userId', onDelete: 'CASCADE' });
UserLoginLogs.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

BookStores.hasOne(User, { foreignKey: 'bookStoreId', as: 'storeManager', onDelete: 'CASCADE' });
User.belongsTo(BookStores, { foreignKey: 'bookStoreId', as: 'store' });

BookStores.hasMany(Books, { foreignKey: 'bookStoreId', onDelete: 'CASCADE' });
Books.belongsTo(BookStores, { foreignKey: 'bookStoreId', onDelete: 'CASCADE' });

Authors.hasMany(Books, { foreignKey: 'authorId', onDelete: 'CASCADE' });
Books.belongsTo(Authors, { foreignKey: 'authorId', onDelete: 'CASCADE' });

Books.hasMany(Inventory, { foreignKey: 'bookId', onDelete: 'CASCADE' });
Inventory.belongsTo(Books, { foreignKey: 'bookId', onDelete: 'CASCADE' });

BookStores.hasMany(Inventory, { foreignKey: 'bookstoreId', onDelete: 'CASCADE' });
Inventory.belongsTo(BookStores, { foreignKey: 'bookstoreId', onDelete: 'CASCADE' });

module.exports = {
    User,
    BookStores,
    Books,
    Inventory,
    Authors,
    UserLoginLogs,
};

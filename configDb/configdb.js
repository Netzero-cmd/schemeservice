import { Sequelize } from "sequelize";
const { DBNAME, USER_NAME, PASSWORD, DB_PORT, DB_HOST } = process.env;
const sequelize = new Sequelize(DBNAME, USER_NAME, PASSWORD, {
    host: DB_HOST || 'localhost',
    dialect: "mssql",
    port: Number(DB_PORT),
    dialectOptions: {
        options: {
            encrypt: false,
            requestTimeout: 30000
        }
    },
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('✔ Database connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        throw error;
    }
};
const disconnectdb = async () => {
    try {
        await sequelize.close();
        console.log('👋 Database connection closed successfully.');
    } catch (error) {
        console.error('⚠️ Error closing the database connection:', error);
    }
};
export { sequelize, connectDb, disconnectdb };
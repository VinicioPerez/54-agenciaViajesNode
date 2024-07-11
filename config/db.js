import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize(

    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASS,

    // 'agenciaviajes', 'root', 'karito2008',
    // {
    //     host: process.env.DB_HOST,
    //     port: '3306',
    //     dialect: 'mysql',

         process.env.DATABASE_URL, {
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false
    });

export default db;
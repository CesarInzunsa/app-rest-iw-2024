import dotenv from 'dotenv';

dotenv.config();
export default {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    URL_BASE: process.env.URL_BASE,
    CONNECTION_STRING: process.env.CONNECTION_STRING,
    DATABASE: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
}
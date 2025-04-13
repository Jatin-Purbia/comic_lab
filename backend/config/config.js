import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/comic_lab',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
};

export default config;
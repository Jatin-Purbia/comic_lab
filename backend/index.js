import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import app from './app.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // Needed to parse form data
app.use(bodyParser.json());

async () => {
    try {
        await connectDB();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




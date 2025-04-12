import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.route.js';

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

export default app;
import User from '../models/user.model.js';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';


const CLIENT_ID = process.env.GOOGLE_CLIENT_ID

export const googleLogin = async (req, res) => {
    const client = new OAuth2Client(CLIENT_ID);

    try {
        const token = req.headers.authorization?.split(' ')[1]; 

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload(); 
        console.log('User verified:', payload);

        const email = payload.email;
        const name = payload.name;
        let user = await User.findOne({ email });

        if (!user) {
            console.log("Creating user");
            user = await User.create({
                email: email,
                display_name: name
            })
        }
        const { _id } = user;
        const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });

        return res.status(200).json({
            success: true,
            jwtToken,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const signUp = async (req, res) => {
    const { email, password, display_name } = req.body;
    try {
        const user = await User.create({
            email,
            password,
            display_name
        });
        const { _id } = user;
        const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });

        return res.status(200).json({
            success: true,
            jwtToken,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}




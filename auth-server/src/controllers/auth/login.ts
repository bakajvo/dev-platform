import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import {RequestHandler} from 'express';
import User from '../../models/User'
import {compare} from "bcrypt";
import jwt from 'jsonwebtoken';

export const loginSchema = Joi.object().keys({
    nick: Joi.string().min(4).max(32).required(),
    password: Joi.string().min(6).max(256).required()
});

const login: RequestHandler = async (req, res) => {
    const {nick, password} = req.body;

    const user = await User.findOne({nick});
    if (!user) {
        return res.status(400).send('Nick is not found!');
    }

    const validPassword = await compare(password, user.password);
    if(!validPassword) {
        return res.status(400).send('Invalid password!');
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('Authorization', `Bearer ${token}`).send(token);
};

export default requestMiddleware(login, {validation: {body: loginSchema}});
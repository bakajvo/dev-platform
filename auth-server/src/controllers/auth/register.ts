import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import {RequestHandler} from 'express';
import User from '../../models/User'
import {genSalt, hash} from "bcrypt";

export const registerSchema = Joi.object().keys({
    nick: Joi.string().min(4).max(32).required(),
    firstName: Joi.string().min(1).max(32).required(),
    lastName: Joi.string().min(1).max(32).required(),
    email: Joi.string().min(5).max(125).required(),
    password: Joi.string().min(6).max(256).required()
});

const register: RequestHandler = async (req, res) => {
    const {nick, firstName, lastName, email, password} = req.body;

    const nickExists = await User.findOne({nick});
    if(nickExists) {
        return res.status(400).send('Nick already exists!');
    }

    const emailExists = await User.findOne({email});
    if(emailExists) {
        return res.status(400).send('Email already exists!');
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = new User({nick, firstName, lastName, email, password: hashedPassword});
    const savedUser = await user.save();

    res.send({
        message: 'Registered',
        user: savedUser.toJSON()
    })
};

export default requestMiddleware(register, {validation: {body: registerSchema}});
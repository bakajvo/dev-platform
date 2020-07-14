import {Document, model, Model, Schema} from "mongoose";

export interface IUser extends Document {
    nick: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    registrationDate: Date;
}

interface IUserModel extends Model<IUser> {
}

const schema = new Schema({
    nick: {
        type: String,
        required: true,
        min: 4,
        max: 32
    },
    firstName: {
        type: String,
        required: true,
        min: 1,
        max: 32
    },
    lastName: {
        type: String,
        required: true,
        min: 1,
        max: 32
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 128
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const User: IUserModel = model<IUser, IUserModel>('User', schema);

export default User;
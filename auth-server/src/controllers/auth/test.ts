import requestMiddleware from '../../middleware/request-middleware';
import {RequestHandler} from 'express';
import {verifyToken} from "../../middleware/verify-middleware";


const test: RequestHandler = async (req, res) => {

    console.log('TestGetBody');

    res.send({
        message: 'Secret context',
    })
};

export default verifyToken(requestMiddleware(test));
import {NextFunction, Request, RequestHandler, Response} from 'express';
import jwt from 'jsonwebtoken'
import UnauthorizedRequest from "../errors/unauthorized-request";
import logger from "../logger";

export const verifyToken = (handler: RequestHandler): RequestHandler => async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.header('Authorization');
    let token: string;
    if (authHeader && authHeader.startsWith("Bearer ")){
        token = authHeader.substring(7, authHeader.length);
    } else {
        return next(new UnauthorizedRequest());
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (e) {
        return next(new UnauthorizedRequest('Invalid token!'));
    }

    return handler(req, res, next).catch((err: Error) => {
        if (process.env.NODE_ENV === 'development') {
            logger.log({
                level: 'error',
                message: 'Verify token failed in request handler',
                error: err
            });
        }
        next(err);
    });
};
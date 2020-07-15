import {Router} from 'express';

import * as AuthController from './controllers/auth';

const router = Router();

// Auth routes
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.get('/auth/test', AuthController.test);

export default router;

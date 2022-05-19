import { Router } from 'express';
import { merchantRouter } from './merchants';
import {userRouter} from './users'

export const router = Router();

router.use('/users', userRouter)
router.use('/merchants', merchantRouter)
import { Router } from 'express';
import {userRouter} from './users'

export const router = Router();

router.use('/users', userRouter)
import { Router } from 'express';
import { authRouter } from './auth';
import { cartRouter } from './carts';
import { merchantRouter } from './merchants';
import { orderRouter } from './orders';
import { productRouter } from './products';
import {userRouter} from './users'

export const router = Router();

router.use('/users', userRouter);
router.use('/merchants', merchantRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/cart', cartRouter);
router.use('/auth', authRouter)
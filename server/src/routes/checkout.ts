import { Router } from 'express';
import { checkout } from '../controllers/checkout.controller';

export const checkoutRouter = Router();

checkoutRouter.route('/').post(checkout.createCheckoutSession);
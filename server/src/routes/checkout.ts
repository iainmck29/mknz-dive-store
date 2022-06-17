import { Router } from 'express';
import { createPaymentintent } from '../controllers/payments.controller';


export const checkoutRouter = Router();

checkoutRouter.route('/create-payment-intent').post(createPaymentintent);
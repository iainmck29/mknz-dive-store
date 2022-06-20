import { Router } from 'express';
import { createPaymentintent } from '../controllers/payments.controller';
import passport from 'passport';


export const checkoutRouter = Router();

checkoutRouter.route('/create-payment-intent').post(passport.authenticate('jwt-customer', { session: false }), createPaymentintent);
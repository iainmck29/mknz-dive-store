const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
import { Request, Response, NextFunction } from 'express'
import { cartService } from '../services';

export const createPaymentintent = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    const cartID = req.cart.id;
    
    const amount = await cartService.getCartTotal(cartID);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "gbp"
    })
    res.send({
        clientSecret: paymentIntent.clientSecret
    })
}
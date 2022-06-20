const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
import { Request, Response, NextFunction } from 'express'
import { cartService } from '../services';

export const createPaymentintent = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    const { cartID } = req.body;
    
    let amount = await cartService.getCartTotal(cartID);

    
    const paymentIntent = await stripe.paymentIntents.create({
        //@ts-ignore
        amount: parseInt(amount.total) * 100,
        currency: "gbp"
    })
    res.status(200).json({
        clientSecret: paymentIntent.client_secret
    })
}
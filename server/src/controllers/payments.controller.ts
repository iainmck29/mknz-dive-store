const stripe = require('stripe')("sk_test_51L3IMqLnUzVHmZYuNZxPvStocbaOjxwaBh67YjR5jU0af5RoCmi3C0YCtnb01Qqr3XrydrEfExGQpDb1UTgNaX3D00y1Voy7sr");
import { Request, Response, NextFunction } from 'express'
import { cartService } from '../services';

export const createPaymentintent = async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    const { cartID } = req.body;
    
    let amount = await cartService.getCartTotal(cartID);

    
    const paymentIntent = await stripe.paymentIntents.create({
        //@ts-ignore
        amount: parseInt(amount.total),
        currency: "gbp"
    })
    res.status(200).json({
        clientSecret: paymentIntent.client_secret
    })
}
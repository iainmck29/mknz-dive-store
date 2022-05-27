const stripe = require('stripe')('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');
import { Request, Response, NextFunction } from 'express'

// const createPaymentintent = async (req: Request, res: Response, next: NextFunction) => {
//     //@ts-ignore
//     const userID = req.user.id;
    
//     const amount = 
// }
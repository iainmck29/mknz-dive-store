import { Router } from "express";
import { merchants } from "../controllers";
import passport from "passport";

export const merchantRouter = Router();
const { getMerchants, getMerchantById, createMerchant, updateMerchant, deleteMerchant } = merchants;

merchantRouter.route('/').get(passport.authenticate('jwt-customer', { session: false }), getMerchants);
merchantRouter.route('/:id').get(getMerchantById);
merchantRouter.route('/new-merchant').post(createMerchant);
merchantRouter.route('/:id').put(updateMerchant);
merchantRouter.route('/:id').delete(deleteMerchant);
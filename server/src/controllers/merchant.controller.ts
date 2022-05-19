import { merchantService } from "../services";
import { Request, Response } from "express";

const getMerchants = async (req: Request, res: Response) => {
    const results = await merchantService.getMerchants();
    return res.status(200).json(results);
};

const getMerchantById = async (req: Request, res: Response) => {
    const { id } = req.params
    const results = await merchantService.getMerchantById(id);
    return res.status(200).json(results);
};

const createMerchant = async (req: Request, res: Response) => {
    const { name, description, email } = req.body;
    const results = await merchantService.createMerchant(name, description, email);
    return res.status(200).json(results);
};

const updateMerchant = async (req: Request, res: Response) => {
    const { name, description, email } = req.body;
    const { id } = req.params;
    const results = await merchantService.updateMerchant({ id, name, description, email });

    return res.status(200).json(results);
};

const deleteMerchant = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await merchantService.deleteMerchant(id);

    return res.status(200).json(result);
};

export const merchants = {
    getMerchants,
    getMerchantById,
    createMerchant,
    updateMerchant,
    deleteMerchant
};
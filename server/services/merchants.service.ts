import { query } from '../models';

type Merchant = {
    id: string
    name: string,
    description: string,
    email: string
};

const getMerchants = async () => {
    const { rows: merchants } = await query(`SELECT * FROM merchants`);
    return merchants;
};

const getMerchantById = async (id: string) => {
    const { rows: merchant } = await query(`SELECT * FROM merchants WHERE id = $1`, [id])
    return merchant[0]
};

const createMerchant = async (name: string, description: string, email: string) => {
    const { rows: merchant } = await query(`INSERT INTO merchants(name, description, email) VALUES $1, $2, $3`, [name, description, email]);
    return merchant;
};

const updateMerchant = async (updatedMerchant: Merchant) => {
    const { name, description, email, id } = updatedMerchant
    const { rows: merchant } = await query(` UPDATE merchants (
        name,
        description,
        email
    ) VALUES (
        $1, $2, $3
    ) WHERE id = $4`, [
        name,
        description,
        email,
        id
    ])
    return merchant;
};

const deleteMerchant = async (id: string) => {
    const { rows: merchant } = await query(`DELETE FROM merchants WHERE id = $1 RETURNING *`, [id])
    return merchant;
};

export const merchantService = {
    getMerchants,
    getMerchantById,
    createMerchant,
    updateMerchant,
    deleteMerchant
};
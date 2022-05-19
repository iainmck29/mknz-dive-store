import { query } from '../models';

type Merchant = {
    id: string
    name: string,
    description: string,
    email: string
};

const getMerchants = async () => {
    const { rows } = await query(`SELECT * FROM merchants`);
    return rows;
};

const getMerchantById = async (id: string) => {
    const { rows } = await query(`SELECT * FROM merchants WHERE id = $1`, [id])
    return rows[0]
};

const createMerchant = async (name: string, description: string, email: string) => {
    const { rows } = await query(`INSERT INTO merchants(name, description, email) VALUES ($1, $2, $3) RETURNING *`, [name, description, email]);
    return rows[0];
};

const updateMerchant = async (updatedMerchant: Merchant) => {
    const { name, description, email, id } = updatedMerchant
    const { rows } = await query(` UPDATE merchants SET name = $1, description = $2, email = $3WHERE id = $4 RETURNING *`, [
        name,
        description,
        email,
        id
    ])
    return rows[0];
};

const deleteMerchant = async (id: string) => {
    const { rows } = await query(`DELETE FROM merchants WHERE id = $1 RETURNING *`, [id])
    return rows[0];
};

export const merchantService = {
    getMerchants,
    getMerchantById,
    createMerchant,
    updateMerchant,
    deleteMerchant
};
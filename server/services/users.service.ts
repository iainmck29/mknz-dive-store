import { query } from '../models'

type User = {
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    address1: string,
    address2: string,
    postcode: string,
    city: string
}

const getUsers = async () => {
    const { rows: users } = await query(`SELECT * FROM users`);
    return users;
};

const getCurrentUser = async (id: string) => {
    const { rows: user } = await query(`SELECT * FROM users WHERE id = $1`, [id])
    return user[0]
}

const newUser = async (username: string, password: string) => {
    const { rows: user } = await query(`INSERT INTO users(username, password_hash) VALUES ($1, $2)`, [username, password])
    return user[0]
}

const updateUser = async (user: User) => {
    const { first_name, last_name, username, address1, address2, postcode, city, id } = user;
    const { rows: updatedUser } = await query(`UPDATE users (
        first_name,
        last_name,
        username,
        address1,
        address2,
        postcode,
        city
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
    ) WHERE id = $8`, [
        first_name,
        last_name,
        username,
        address1,
        address2,
        postcode,
        city,
        id
    ])
    return updatedUser
};

const deleteUser = async (id: string) => {
    const { rows: user } = await query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id])
    return user[0]
};

export const userService = {
    getUsers,
    getCurrentUser,
    newUser,
    updateUser,
    deleteUser
}
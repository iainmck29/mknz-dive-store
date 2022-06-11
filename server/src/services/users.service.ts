import { query } from '../models'

type UpdatedUser = {
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

const getUserByUsername = async (username: string) => {
    const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [username]);
    return rows[0];
}

const newUser = async (username: string, password: string) => {
    try {
    const { rows: user } = await query(`INSERT INTO users(username, password_hash) VALUES ($1, $2) RETURNING *`, [username, password])
    return user;
    } catch(err) {
        console.log(err)
    }
};

const updateUser = async (user: UpdatedUser) => {
    const { first_name, last_name, username, address1, address2, postcode, city, id } = user;
    const { rows: updatedUser } = await query(`UPDATE users SET
        first_name = $1,
        last_name = $2,
        username = $3,
        address1 = $4,
        address2 = $5,
        postcode = $6,
        city = $7
        WHERE id = $8
        RETURNING *`, [
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
    deleteUser,
    getUserByUsername
}
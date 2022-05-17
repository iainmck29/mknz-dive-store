const db = require('../models');

const getUsers = async () => {
    const { rows: users } = await db.query(`SELECT * FROM USERS`);
    return users;
};

const newUser = async (username: string, password: string) => {
    db.query(`INSERT INTO users(username, password_hash) VALUES ($1, $2)`, [username, password])
}

const updateUser = async (user) => {
    db.query(`UPDATE users (
        first_name,
        last_name,
        username,
        address1,
        address2,
        postcode,
        city
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
    )`, [
        user.first_name,
        user.last_name,
        user.username,
        user.address1,
        user.address2,
        user.postcode,
        user.city
    ])
};

const deleteUser = async (id) => {
    db.query(`DELETE FROM users WHERE id = $1`, [id])
}
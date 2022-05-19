

export const vals = {
    PORT: process.env.PORT,
    DB: {
        PGUSER: process.env.PGUSER,
        PGHOST: process.env.PGHOST,
        PGDATABASE: process.env.PGDATABASE,
        PGPASSWORD: process.env.PGPASSWORD,
        PGPORT: process.env.PGPORT
    },
    SESSION_SECRET: process.env.SESSION_SECRET
}
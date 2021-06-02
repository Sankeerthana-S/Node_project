
const config = {
    app: {
        port: process.env.PORT
    },
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
}
module.exports = config;
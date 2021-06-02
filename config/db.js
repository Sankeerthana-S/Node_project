const Knex = require("knex");
const config = require("./config").db;
const fs = require("fs");
const path = require("path");

config.host = process.env.DB_HOST;
const knex = Knex({
    client: 'pg',
    connection: config
});

module.exports = knex;
const Knex = require("knex");
const config = require("./config").db;
const fs = require("fs");
const path = require("path");

const knex = Knex({
    client: 'pg',
    connection: config
});

module.exports = knex;
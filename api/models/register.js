const { NotExtended } = require('http-errors');
const knex = require('../../config/db');

const form = (req, res, next) => {
    const {id: id, user_name: user_name, email: email, password: password} = req.body;
    knex('users').insert(
        {
            id: id,
            name: user_name,
            email_id: email,
            password: password
        }
    ).then(result=>{
        console.log(`Successfully registereed for user: ${user_name}`);
        return res.render('success_page',{user_name: user_name});
    })
    console.log(`${id}, ${user_name}, ${email}, ${password}`);
}
module.exports ={
    register: form
}
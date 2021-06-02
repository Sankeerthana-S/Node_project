

const register = (req,res,next)=>{
    res.render('/register');
}

// knex.schema.createTable('users', table=>{
//     table.integer('id').primary()
//     table.string('name').notNullable()
//     table.string('email_id').unique().notNullable()
//     table.string('password')
// }).then(()=>
//     {console.log('Table created successfully')}
//     ).catch((err)=>
//     {console.error(`Error reported ${err}`);}
//     );

module.exports ={
    register: register
}
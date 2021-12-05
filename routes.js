const router = require('express').Router();
const connection = require('./config/connection');

// method get all users
router.get('/usuarios', (request, response) => {
    let consult = 'select * from usuarios';
    connection.query(consult, (error, rows, fields) => {
        if(error) throw error;
        else response.json(rows);
    });
});

// method get user by id
router.get('/usuarios/:id', (request, response) => {
    const {id} = request.params;
    let consult = 'select * from usuarios where id = ?';
    connection.query(consult, [id], (error, rows, fields) => {
        if(error) throw error;
        else response.json(rows);
    });
});

// method create user
router.post('/usuarios', (request, response) => {
    const {username, password, perfil_id, correo, telefono} = request.body;
    console.log(username);
    let consult = `insert into usuarios (username, password, perfil_id, correo, telefono) 
                    values ('${username}', '${password}', '0', '${correo}', '${telefono}')`;
    connection.query(consult, (error, rows, fields) => {
        if(error) throw error;
        else response.json({status: 'created success'});
    });
});

// method update user by id
router.put('/usuarios/:id', (request, response) => {
    const {id} = request.params;
    const {username, password, perfil_id, correo, telefono} = request.body;
    let consult = `update usuarios set username = '${username}', password = '${password}',
                        perfil_id = '${perfil_id}', correo = '${correo}', telefono = '${telefono}'
                        where id = '${id}'`;
    connection.query(consult, (error, rows, fields) => {
        if(error) throw error;
        else response.json({status: 'updated success'});
    });
});

// method delete user by id
router.delete('/usuarios/:id', (request, response) => {
    const {id} = request.params;
    let consult = `delete from usuarios where id = '${id}'`;
    connection.query(consult, (error, rows, fields) => {
        if(error) throw error;
        else response.json({status: 'deleted success'});
    });
});

module.exports = router;
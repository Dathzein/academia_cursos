const mysql = require('mysql');
const config = require('../config');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

const conexionMysql = () =>{
    connection = mysql.createConnection(dbConfig);
    connection.connect((err) =>{
        if(err){
            console.error('[ db error ]', err);
            setTimeout(conexionMysql(), 200);
        }else{
            console.log('Conectado pa');
        }
    });

    connection.on('error', err =>{
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conexionMysql()
        }else{
            throw err;
        }
    })
}

conexionMysql();

const getAll = (tabla) =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM ${tabla}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
            
        });
    })
}
const getSingle = (tabla, id) =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    })
}
const add = (tabla, data) =>{
    if(data && !data.id){
        return insert(tabla, data);
    }else{
        return update(tabla, data);
    }

}
const insert = (tabla, data) =>{

    return new Promise( (resolve, reject) =>{
        connection.query(`INSERT INTO ${tabla}  SET ?`, data, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    })

}
const update = (tabla, data) =>{

    return new Promise( (resolve, reject) =>{
        connection.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    })

}
const deleteReg = (tabla, data) =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    })
}

const getUsuarioPerfil = () =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM usuarios 
        INNER JOIN perfil_usuario ON perfil_usuario.id_user = usuarios.id 
        INNER JOIN perfil ON perfil.id = perfil_usuario.id_perfil`, (error, result) =>{
            return error ? reject(error) : resolve(result);
            
        });
    })
}
const getCursoAlumno = () =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM curso 
        INNER JOIN curso_alumno ON curso_alumno.id_curso = curso.id 
        INNER JOIN usuarios ON usuarios.id = curso_alumno.id_alumno`, (error, result) =>{
            return error ? reject(error) : resolve(result);
            
        });
    })
}

const getCursoAlumnoByAlumno = (id) =>{
    return new Promise( (resolve, reject) =>{
        connection.query(`SELECT * FROM curso 
        INNER JOIN curso_alumno ON curso_alumno.id_curso = curso.id 
        INNER JOIN usuarios ON usuarios.id = curso_alumno.id_alumno WHERE id_alumno = ${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
            
        });
    })
}

module.exports = {
    getAll,
    getSingle,
    add,
    deleteReg,
    getUsuarioPerfil,
    getCursoAlumno,
    getCursoAlumnoByAlumno
}

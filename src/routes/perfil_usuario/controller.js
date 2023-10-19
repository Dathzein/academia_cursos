const db = require('../../database/mysql');

const tabla = 'perfil_usuario';

const obtenerUsuariosPerfil = () =>{
    return db.getUsuarioPerfil()
}
const asignarPerfil = (data) =>{
    return db.add(tabla, data)
}


module.exports = {
    obtenerUsuariosPerfil,
    asignarPerfil,
}
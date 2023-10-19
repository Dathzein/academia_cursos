const db = require('../../database/mysql');

const tabla = 'usuarios';

const obtenerUsuarios = () =>{
    return db.getAll(tabla)
}
const obtenerUsuario = (id) =>{
    return db.getSingle(tabla, id)
}
const agregarUsuario = (data) =>{
    return db.add(tabla, data)
}
const eliminarUsuario = (data) =>{
    return db.deleteReg(tabla, data)
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    agregarUsuario,
    eliminarUsuario
}
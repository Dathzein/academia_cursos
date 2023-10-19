const db = require('../../database/mysql');

const tabla = 'perfil';

const obtenerPerfiles = () =>{
    return db.getAll(tabla)
}
const obtenerPerfil = (id) =>{
    return db.getSingle(tabla, id)
}
const agregarPerfil = (data) =>{
    return db.add(tabla, data)
}
const eliminarPerfil = (data) =>{
    return db.deleteReg(tabla, data)
}

module.exports = {
    obtenerPerfiles,
    obtenerPerfil,
    agregarPerfil,
    eliminarPerfil
}
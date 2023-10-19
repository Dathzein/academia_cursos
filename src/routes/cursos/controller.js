const db = require('../../database/mysql');

const tabla = 'curso';

const obtenerCursos = () =>{
    return db.getAll(tabla)
}
const obtenerCurso = (id) =>{
    return db.getSingle(tabla, id)
}
const agregarCurso = (data) =>{
    return db.add(tabla, data)
}
const eliminarCurso = (data) =>{
    return db.deleteReg(tabla, data)
}

module.exports = {
    obtenerCursos,
    obtenerCurso,
    eliminarCurso,
    agregarCurso,
}
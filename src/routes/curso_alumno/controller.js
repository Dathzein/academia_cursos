const db = require('../../database/mysql');

const tabla = 'curso_alumno';

const obtenerCursoAlumno = () =>{
    return db.getCursoAlumno()
}
const asignarCurso = (data) =>{
    return db.add(tabla, data)
}

module.exports = {
    obtenerCursoAlumno,
    asignarCurso,
}
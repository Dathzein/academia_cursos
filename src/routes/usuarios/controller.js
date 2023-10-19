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

const login = (usu, contrasena) =>{
    const authData = {
        email: usu,
        contrasena: contrasena
    }

    if(usu){
        authData.email = usu
    }
    if(contrasena){
        authData.contrasena = contrasena
    }

    return db.logIn(tabla, authData)
    
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    agregarUsuario,
    eliminarUsuario,
    login
}
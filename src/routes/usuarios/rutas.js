const express = require('express');

const respuesta = require('../../network/respuestas');

const controller = require('./controller');

const router = express.Router();

router.get('/', consultarUsuarios);
router.get('/:id', consultarUsuario);
router.post('/', agregarUsuario);
router.put('/', eliminarUsuario);
router.post('/login', iniciarSesion);

async function consultarUsuarios(req, res, next) {
    try {
        const items = await controller.obtenerUsuarios()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
}

async function consultarUsuario(req, res, next) {
    try {
        const item = await controller.obtenerUsuario(req.params.id)
        respuesta.success(req, res, item, 200);
    } catch (error) {
        next(error);
    }
}
async function agregarUsuario(req, res, next) {
    try {
        const item = await controller.agregarUsuario(req.body)
        if(req.body.id == 0){
            mensaje = 'usuario guardado.'
        }else{
            mensaje = 'usuario actualizado.'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
}
async function eliminarUsuario(req, res, next) {
    try {
        const items = await controller.eliminarUsuario(req.body)
        respuesta.success(req, res, 'Usuario eliminado', 200);
    } catch (error) {
        next(error);
    }
}

async function iniciarSesion(req, res, next){
    let username = req.body.email;
	let password = req.body.contrasena;
    try {
        if(username && password){
            const usuario = await controller.login(username, password)
            respuesta.success(req, res, usuario, 200);
        }      
    } catch (error) {
        next(error);
    }
}

module.exports = router;
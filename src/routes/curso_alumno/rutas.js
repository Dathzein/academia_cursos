const express = require('express');

const respuesta = require('../../network/respuestas');

const controller = require('./controller');

const router = express.Router();

router.get('/', consultar);
router.get('/:id', consultarUsuario);
router.post('/', asignarCurso);
router.put('/', eliminarUsuario);

async function consultar(req, res, next) {
    try {
        const items = await controller.obtenerCursoAlumno()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
}

async function asignarCurso(req, res, next) {
    try {
        const item = await controller.asignarCurso(req.body)
        if(!req.body.id){
            mensaje = 'usuario guardado.'
        }else{
            mensaje = 'usuario actualizado.'
        }
        respuesta.success(req, res, mensaje, 201);
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
async function asignarCurso(req, res, next) {
    try {
        const item = await controller.asignarCurso(req.body)
        if(!req.body.id){
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

module.exports = router;
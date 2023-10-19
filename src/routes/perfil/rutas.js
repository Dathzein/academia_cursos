const express = require('express');

const respuesta = require('../../network/respuestas');

const controller = require('./controller');

const router = express.Router();

router.get('/', consultarPerfiles);
router.get('/:id', obtenerPerfil);
router.post('/', agregarPerfil);
router.put('/', eliminarPerfil);

async function consultarPerfiles(req, res, next) {
    try {
        const items = await controller.obtenerPerfiles()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
}

async function obtenerPerfil(req, res, next) {
    try {
        const item = await controller.obtenerPerfil(req.params.id)
        respuesta.success(req, res, item, 200);
    } catch (error) {
        next(error);
    }
}
async function agregarPerfil(req, res, next) {
    try {
        const item = await controller.agregarPerfil(req.body)
        if(!req.body.id){
            mensaje = 'perfil guardado.'
        }else{
            mensaje = 'perfil actualizado.'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
}
async function eliminarPerfil(req, res, next) {
    try {
        const items = await controller.eliminarPerfil(req.body)
        respuesta.success(req, res, 'perfil eliminado', 200);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
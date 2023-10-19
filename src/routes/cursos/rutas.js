const express = require('express');

const respuesta = require('../../network/respuestas');

const controller = require('./controller');

const router = express.Router();

router.get('/', consultarCursos);
router.get('/:id', consultarCurso);
router.post('/', agregarCurso);
router.put('/', eliminarCurso);

async function consultarCursos(req, res, next) {
    try {
        const items = await controller.obtenerCursos()
        respuesta.success(req, res, items, 200);
    } catch (error) {
        next(error);
    }
}

async function consultarCurso(req, res, next) {
    try {
        const item = await controller.obtenerCurso(req.params.id)
        respuesta.success(req, res, item, 200);
    } catch (error) {
        next(error);
    }
}
async function agregarCurso(req, res, next) {
    try {
        const item = await controller.agregarCurso(req.body)
        if(req.body.id == 0){
            mensaje = 'Item guardado'
        }else{
            mensaje = 'Item actualizado'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
}
async function eliminarCurso(req, res, next) {
    try {
        const items = await controller.eliminarCurso(req.body)
        respuesta.success(req, res, 'item eliminado', 200);
    } catch (error) {
        next(error);
    }
}

module.exports = router;
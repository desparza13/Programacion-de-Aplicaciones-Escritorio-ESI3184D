const express = require('express');
const router = express.Router();
const controller = require('../controllers/tareas')

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: enlistar todas las tareas en la base de datos
 *    responses:
 *      200:
 *        description: arreglo con objetos tareas con el resultado de todas las tareas
 *      400:
 *        description: algo salió mal al recuperar las tareas
 */
router.get('/',controller.listar);

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: listar una tarea en específico
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea a obtener
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: objeto de la tarea con el id especificado
 *      400:
 *        description: error al encontrar el objeto con ese id
 */
router.get('/:id', controller.ver);

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea en la base de datos
 *    parameters:
 *      - in: body
 *        name: tareaACrear
 *        description: un JSON que contenga los atributos titulo, descripcion y status
 *        required: true
 *        schema: 
 *          type: object
 *    responses:
 *      201:
 *        description: objeto de la tarea creada correctamente
 *      400:
 *        description: error al crear la tarea 
 */
router.post('/', express.json(), controller.crear);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: actualizar una tarea en específico
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea que se quiere actualizar
 *        required: true
 *        schema:
 *          type: string
 *      - in: body
 *        name: tareaActualizada
 *        description: un JSON que contenga los atributos titulo, descripcion y status
 *        required: true
 *        schema: 
 *          type: object
 *    responses:
 *      200:
 *        description: actualización de tarea exitosa
 *      400:
 *        description: error al actualizar la tarea
 */
router.put('/:id', express.json(), controller.actualizar);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: eliminar una tarea de acuerdo a su id
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea a eliminar
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: eliminación exitosa
 *      400:
 *        description: error al eliminar la tarea
 */
router.delete('/:id', controller.eliminar);



module.exports = router;
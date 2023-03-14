const router = require('express').Router();
const rutaTareas= require('./tareas.js');

router.use('/tareas',rutaTareas);

module.exports = router;

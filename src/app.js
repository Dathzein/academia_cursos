const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const cors = require('cors')


const usuarios = require('./routes/usuarios/rutas')
const cursos = require('./routes/cursos/rutas')
const perfiles = require('./routes/perfil/rutas')
const perfilUsuario = require('./routes/perfil_usuario/rutas')
const cursoAlumno = require('./routes/curso_alumno/rutas')

const error = require('./network/error');

const app = express();

//middleWare

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors())

//configuracion
app.set('port', config.app.port);

//rutas
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);
app.use('/api/perfil', perfiles);
app.use('/api/perfil-usuario', perfilUsuario);
app.use('/api/curso-alumno', cursoAlumno);
app.use(error);

module.exports = app;

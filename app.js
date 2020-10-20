var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors  = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/controllers/users');
var loginRouter = require('./routes/controllers/login');
var ciudadRouter = require('./routes/controllers/ciudades');
var sedeRouter = require('./routes/controllers/sedes');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./routes/swagger/swagger.json');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
//Swagger
app.use('/api-docs', cors(), swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/ciudad', ciudadRouter);
app.use('/sede', sedeRouter);
module.exports = app;

const express =  require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas o url
app.use('/api/tasks',require('./routes/task.routes'));

//datos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//inicioando server

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
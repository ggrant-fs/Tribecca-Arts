const express = require('express');
const morgan = require('morgan')
// const jewelryRouter =require('./routes/jewelryRoutes');
const paintingsRouter = require('./routes/paintingsRoutes');
// const sculptureRouter = require('./routes/sculpturesRoutes');

const app = express();

//middleware functions:
app.use(morgan('dev'));
app.use(express.json());
//express.static


app.use('/api/v1/art/paintings',paintingsRouter);
// app.use('/api/v1/art/jewelry',jewelryRouter);
// app.use('/api/v1/arts/sculpture',sculptureRouter)

module.exports = app;
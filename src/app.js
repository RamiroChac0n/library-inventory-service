const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./config/swagger');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


module.exports = app;
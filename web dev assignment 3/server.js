require('dotenv').config();
const express = require('express');
const ConnectDB = require('./config/db.js');
const productRoutes = require('./routes/product.routes.js');
const { notFound, errorHandler } = require('./middleware/error.middleware.js');

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use('/', productRoutes);

// error handling middlewares (always at the end)
app.use(notFound);
app.use(errorHandler);

ConnectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

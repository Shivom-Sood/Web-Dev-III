const express = require('express');
const router = express.Router();
const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    updateStock,
    deleteProduct,
    getLowStock,
    getCategorySummary
} = require('../controller/product.controller.js');
const { validateId, validateStock } = require('../middleware/validate.middleware.js');

// reports (keep these above /:id routes)
router.get('/api/products/low-stock', getLowStock);
router.get('/api/products/summary', getCategorySummary);

// Create product
router.post('/api/products', addProduct);

// Get all products
router.get('/api/products', getProducts);

// Get product by id
router.get('/api/products/:id', validateId, getProductById);

// Update product
router.put('/api/products/:id', validateId, updateProduct);

// Update stock (restock / sale)
router.patch('/api/products/:id/stock', validateId, validateStock, updateStock);

// Delete product
router.delete('/api/products/:id', validateId, deleteProduct);

module.exports = router;

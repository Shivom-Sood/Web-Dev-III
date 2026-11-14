const Product = require('../model/product.model.js');

// Create product
const addProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
}

// Get all products with filtering, sorting and pagination
// example: /api/products?category=Electronics&minPrice=500&sort=-price&page=1&limit=5
const getProducts = async (req, res, next) => {
    try {
        const { category, search, minPrice, maxPrice, sort } = req.query;

        // filtering
        const filter = {};
        if (category) {
            filter.category = category;
        }
        if (search) {
            filter.name = { $regex: search, $options: 'i' };
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        // sorting  (?sort=price or ?sort=-price for descending)
        let sortBy = '-createdAt';
        if (sort) {
            sortBy = sort.split(',').join(' ');
        }

        // pagination
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const total = await Product.countDocuments(filter);
        const products = await Product.find(filter).sort(sortBy).skip(skip).limit(limit);

        res.json({
            total: total,
            page: page,
            totalPages: Math.ceil(total / limit),
            count: products.length,
            products: products
        });
    } catch (error) {
        next(error);
    }
}

// Get product by id
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
}

// Update product details
const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true
        });
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        next(error);
    }
}

// Update stock -> { "change": 20 } for restock, { "change": -5 } for sale
const updateStock = async (req, res, next) => {
    try {
        const change = req.body.change;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // stock should never go below 0
        if (product.quantity + change < 0) {
            return res.status(400).json({
                success: false,
                message: `Not enough stock. Available: ${product.quantity}`
            });
        }

        product.quantity = product.quantity + change;
        await product.save();

        res.json({ message: 'Stock updated', product: product });
    } catch (error) {
        next(error);
    }
}

// Delete product
const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.json({ message: 'Product deleted', id: product._id });
    } catch (error) {
        next(error);
    }
}

// Low stock report -> products with quantity <= threshold (default 10)
const getLowStock = async (req, res, next) => {
    try {
        const threshold = Number(req.query.threshold) || 10;
        const products = await Product.find({ quantity: { $lte: threshold } }).sort('quantity');
        res.json({ threshold: threshold, count: products.length, products: products });
    } catch (error) {
        next(error);
    }
}

// Category wise summary using aggregation
const getCategorySummary = async (req, res, next) => {
    try {
        const summary = await Product.aggregate([
            {
                $group: {
                    _id: '$category',
                    totalProducts: { $sum: 1 },
                    totalQuantity: { $sum: '$quantity' },
                    totalStockValue: { $sum: { $multiply: ['$price', '$quantity'] } },
                    avgPrice: { $avg: '$price' }
                }
            },
            { $sort: { totalStockValue: -1 } }
        ]);
        res.json({ categories: summary.length, summary: summary });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    updateStock,
    deleteProduct,
    getLowStock,
    getCategorySummary
};

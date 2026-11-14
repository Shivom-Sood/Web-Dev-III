// for routes that don't exist
const notFound = (req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
}

// centralized error handler
const errorHandler = (err, req, res, next) => {
    // schema validation errors
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({ success: false, message: messages });
    }

    // duplicate sku
    if (err.code === 11000) {
        return res.status(400).json({ success: false, message: 'SKU already exists' });
    }

    // wrong type of value
    if (err.name === 'CastError') {
        return res.status(400).json({ success: false, message: 'Invalid value for ' + err.path });
    }

    console.log(err);
    res.status(500).json({ success: false, message: 'Server error' });
}

module.exports = { notFound, errorHandler };

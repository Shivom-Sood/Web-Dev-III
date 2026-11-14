const mongoose = require('mongoose');

// check if the id in url is a valid mongodb id
const validateId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ success: false, message: 'Invalid product id' });
    }
    next();
}

// check stock change is a number and not 0
const validateStock = (req, res, next) => {
    const change = req.body.change;
    if (typeof change !== 'number' || change === 0) {
        return res.status(400).json({ success: false, message: 'change must be a number (positive or negative)' });
    }
    next();
}

module.exports = { validateId, validateStock };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    sku: {
        type: String,
        required: [true, 'SKU is required'],
        unique: true,
        uppercase: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: {
            values: ['Electronics', 'Furniture', 'Clothing', 'Grocery', 'Stationery', 'Sports'],
            message: '{VALUE} is not a valid category'
        }
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    quantity: {
        type: Number,
        default: 0,
        min: [0, 'Quantity cannot be negative']
    },
    supplier: {
        type: String
    }
}, { timestamps: true, toJSON: { virtuals: true } });

// stockValue = price * quantity (not saved in DB, calculated when sending)
productSchema.virtual('stockValue').get(function () {
    return this.price * this.quantity;
});

module.exports = mongoose.model('products', productSchema);

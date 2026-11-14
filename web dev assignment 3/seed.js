// adds sample products to the database (run: npm run seed)
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./model/product.model.js');

const products = [
    { name: 'Wireless Mouse', sku: 'ELEC-001', category: 'Electronics', price: 799, quantity: 120, supplier: 'TechWorld' },
    { name: 'Mechanical Keyboard', sku: 'ELEC-002', category: 'Electronics', price: 3499, quantity: 45, supplier: 'TechWorld' },
    { name: 'Monitor 27 inch', sku: 'ELEC-003', category: 'Electronics', price: 14999, quantity: 8, supplier: 'DisplayHub' },
    { name: 'USB-C Charger', sku: 'ELEC-004', category: 'Electronics', price: 1899, quantity: 3, supplier: 'PowerPlus' },
    { name: 'Study Table', sku: 'FURN-001', category: 'Furniture', price: 4999, quantity: 15, supplier: 'WoodCraft' },
    { name: 'Office Chair', sku: 'FURN-002', category: 'Furniture', price: 8999, quantity: 6, supplier: 'WoodCraft' },
    { name: 'Bookshelf', sku: 'FURN-003', category: 'Furniture', price: 3299, quantity: 22, supplier: 'HomeStyle' },
    { name: 'Cotton T-Shirt', sku: 'CLTH-001', category: 'Clothing', price: 499, quantity: 300, supplier: 'FabricHouse' },
    { name: 'Denim Jeans', sku: 'CLTH-002', category: 'Clothing', price: 1499, quantity: 85, supplier: 'FabricHouse' },
    { name: 'Winter Jacket', sku: 'CLTH-003', category: 'Clothing', price: 2999, quantity: 0, supplier: 'NorthWear' },
    { name: 'Basmati Rice 5kg', sku: 'GROC-001', category: 'Grocery', price: 650, quantity: 200, supplier: 'FreshMart' },
    { name: 'Olive Oil 1L', sku: 'GROC-002', category: 'Grocery', price: 899, quantity: 40, supplier: 'FreshMart' },
    { name: 'A4 Notebook', sku: 'STAT-001', category: 'Stationery', price: 299, quantity: 500, supplier: 'PaperPoint' },
    { name: 'Gel Pen Set', sku: 'STAT-002', category: 'Stationery', price: 149, quantity: 9, supplier: 'PaperPoint' },
    { name: 'Cricket Bat', sku: 'SPRT-001', category: 'Sports', price: 2499, quantity: 30, supplier: 'SportZone' },
    { name: 'Football', sku: 'SPRT-002', category: 'Sports', price: 899, quantity: 12, supplier: 'SportZone' }
];

const seed = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Sample products added');
    await mongoose.disconnect();
}

seed();

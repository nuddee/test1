// models/Order.js

import mongoose from 'mongoose';

// Define the schema for individual order items
const OrderItemSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

// Define the schema for the order, which includes an array of OrderItems
const OrderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    total_amount: {
        type: Number,
        required: true,
    },
    item_count: {
        type: Number,
        required: true,
    },
    orderItems: [OrderItemSchema], // Array to hold multiple order items
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);

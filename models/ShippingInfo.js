// models/ShippingInfo.js
import mongoose from 'mongoose';

const ShippingInfoSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.CustomersAddress || mongoose.model('CustomersAddress', ShippingInfoSchema);

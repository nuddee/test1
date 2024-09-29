import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
    },
    payment_date: {
        type: Date,
        default: Date.now, // Automatically set the payment date
    },
    payment_amount: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

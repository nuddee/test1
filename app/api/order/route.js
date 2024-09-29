import Order from '@/models/Order';
import Transaction from '@/models/Transaction'; // Import the Transaction model
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
    try {
        const { cartItems, totalAmount, paymentAmount } = await req.json();
        
        // Create a unique order_id
        const orderId = uuidv4();

        // Calculate total item count
        const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

        // Prepare the orderItems array
        const orderItems = cartItems.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
            unit_price: item.price,
            total: item.price * item.quantity,
        }));

        // Create and save the Order document with orderItems array
        const newOrder = new Order({
            order_id: orderId,
            total_amount: totalAmount,
            item_count: itemCount,
            orderItems, // Store the array of order items in the order
        });

        await newOrder.save();

        // Create and save the Transaction document
        const newTransaction = new Transaction({
            order_id: orderId,
            payment_amount: paymentAmount || totalAmount, // Use the total amount as the payment amount
        });

        await newTransaction.save();

        return new Response(JSON.stringify({ message: 'Order and transaction saved successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error saving order and transaction:', error);
        return new Response(JSON.stringify({ error: 'Failed to save order and transaction' }), { status: 500 });
    }
}

// app/api/shipping-info/route.js
import ShippingInfo from '@/models/ShippingInfo';
import mongoose from 'mongoose';

export async function POST(req) {
    try {
        const { address, city, province, postalCode } = await req.json();

        if (!address || !city || !province || !postalCode) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }

        // Save shipping info to the database
        const shippingInfo = new ShippingInfo({
            address,
            city,
            province,
            postalCode,
        });

        await shippingInfo.save();

        return new Response(JSON.stringify({ message: 'Shipping info saved successfully' }), { status: 201 });
    } catch (error) {
        console.error('Error saving shipping info:', error);
        return new Response(JSON.stringify({ error: 'Failed to save shipping info' }), { status: 500 });
    }
}

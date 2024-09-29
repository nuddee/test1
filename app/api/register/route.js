import { hash } from 'bcryptjs';
import mongoose from 'mongoose';
import Customer from '@/models/User'  // Adjust path based on your project structure

export async function POST(req) {
  try {
    const { username, email, first_name, last_name, password } = await req.json();

    // Validate incoming data
    if (!username || !email || !first_name || !last_name || !password) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    // Check if user already exists
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User with this email already exists' }), { status: 409 });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create new customer
    const newCustomer = new Customer({
      username,
      email,
      first_name,
      last_name,
      password: hashedPassword,
    });

    // Save customer to database
    await newCustomer.save();

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    // Verify the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Return success response with decoded user info
    return NextResponse.json({ message: 'Token is valid', user: decoded });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token', error: error.message }, { status: 401 });
  }
}

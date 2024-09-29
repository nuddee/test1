'use client';

import React from 'react';
import { Container, Typography, Button, Box, Paper, Divider } from '@mui/material';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <Container maxWidth="sm" component="main" sx={{ mt: 8, textAlign: 'center' }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: '15px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Thank You for Your Purchase!
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
                    Your order has been successfully processed. We will send you a confirmation email shortly.
                </Typography>

                <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1463474939/vector/cat-holding-a-placard-with-text-thank-you.jpg?s=612x612&w=0&k=20&c=vVnP06DJbL8ZMislc5PtqeO7NBdmZaojW5FutHWvYYo=" // You can replace this with a custom thank-you image
                    alt="Thank You"
                    sx={{ maxWidth: '100%', height: 'auto', mb: 4 }}
                />

                <Link href="/" passHref>
                    <Button variant="contained" color="primary" sx={{ borderRadius: '50px', px: 4 }}>
                        Back to Home
                    </Button>
                </Link>
            </Paper>
        </Container>
    );
}

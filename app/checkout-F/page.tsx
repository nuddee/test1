'use client';

import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { useCart } from '../../context/CartContext'; // Assuming the same CartContext is used
import Link from 'next/link';

export default function CheckoutForm() {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        province: '',
        postalCode: '',
    });

    const { cartItems } = useCart(); // Access the cart items from context

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/shipping-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to save shipping information');
            }
    
            const result = await response.json();
            console.log(result.message); // Success message
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {/* Left side: Checkout Form */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            Shipping Information
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="province"
                                        label="Province"
                                        name="province"
                                        value={formData.province}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="postalCode"
                                        label="Postal Code"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>

                {/* Right side: Cart Items and Payment */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Cart Summary
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <List>
                            {cartItems.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`Price: $${item.price.toFixed(2)} | Quantity: ${item.quantity}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6">
                            Total: ${calculateTotal()}
                        </Typography>
                        <Link href="/payment" passHref>
                            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                                Proceed to Payment
                            </Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

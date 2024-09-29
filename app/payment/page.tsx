'use client';

import React, { useState } from 'react';

import {
    Container,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
    Button,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
    Box,
    InputLabel,
    Input,
} from '@mui/material';
import { useCart } from '../../context/CartContext'; // Assuming same CartContext is used
import Link from "next/link"

export default function PaymentPage() {
    const { cartItems } = useCart(); // Access cart items from the context
    const [selectedMethod, setSelectedMethod] = useState('');
    const [paymentImage, setPaymentImage] = useState(null);

    const handlePaymentMethodChange = (event) => {
        setSelectedMethod(event.target.name);
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPaymentImage(event.target.files[0]);
        }
    };

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const totalAmount = calculateTotal();
        const paymentAmount = totalAmount; // Assuming paymentAmount is the same as totalAmount
    
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems,
                    totalAmount,
                    paymentAmount, // Pass the payment amount to the backend
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to place order');
            }
    
            const result = await response.json();
            console.log(result.message); // Order and transaction saved successfully
    
            // Redirect to Thank You page after successful order
            
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {/* Left side: Payment Methods */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            Select Payment Method
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedMethod === 'creditCard'} onChange={handlePaymentMethodChange} name="creditCard" />}
                                    label={
                                        <Box>
                                            <Typography variant="body1" style={{fontWeight: "bold"}}>Credit Card</Typography>
                                            <Button>Click to process</Button>
                                            <img src="/images/visa.png" alt="Credit Card" style={{ maxWidth: '100px' }} />
                                        </Box>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedMethod === 'kbank'} onChange={handlePaymentMethodChange} name="kbank" />}
                                    label={
                                        <Box>
                                            <Typography variant="body1" style={{fontWeight: "bold"}}>Kbank</Typography>
                                            <Typography variant="body1">Bank account 1111111111111</Typography>
                                            <img src="/images/kbank.png" alt="PayPal" style={{ maxWidth: '100px' }} />
                                        </Box>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={selectedMethod === 'promptpay'} onChange={handlePaymentMethodChange} name="promptpay" />}
                                    label={
                                        <Box>
                                            <Typography variant="body1" style={{fontWeight: "bold"}}>Prompt pay</Typography>
                                            <Button>Click to scan</Button>
                                            <img src="/images/pp.png" alt="promptpay" style={{ maxWidth: '100px' }} />
                                        </Box>
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            Upload Payment Proof
                        </Typography>
                        <InputLabel htmlFor="upload-button">
                            <Input type="file" id="upload-button" onChange={handleImageChange} />
                        </InputLabel>
                    </Paper>
                </Grid>

                {/* Right side: Cart Summary */}
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

                        <Button variant="contained" style={{backgroundColor:"#AD8B73"}} fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
                            Confirm Payment
                        </Button>

                        <Link href="/checkout" passHref>
                            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                                Done
                            </Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Grid,
    FormControlLabel,
    Radio,
    RadioGroup,
    Button,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Checkbox,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material';

const Checkout = () => {
    const [addressType, setAddressType] = useState('home');
    const [discountCode, setDiscountCode] = useState('');
    const [items, setItems] = useState([
        {
            name: 'MUJIN Dish wel 3 / 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        },
        {
            name: 'QUẢ TẢNG - MUJIN Dish towel 3 pa/set 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        },
        {
            name: 'QUẢ TẢNG - MUJIN Dish towel 3 pa/set 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        },
        {
            name: 'QUẢ TẢNG - MUJIN Dish towel 3 pa/set 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        },
        {
            name: 'QUẢ TẢNG - MUJIN Dish towel 3 pa/set 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        }, {
            name: 'QUẢ TẢNG - MUJIN Dish towel 3 pa/set 45x65 cm. MTC',
            price: 199000,
            quantity: 1,
        },

    ]);

    const calculateSubtotal = () => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const discount = 199000; // Example discount
    const shipping = 48000;
    const total = subtotal - discount + shipping;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, border: 'solid', width: "50%", margin: "auto" }}>
            <Typography variant="h5" gutterBottom>
                Checkout
            </Typography>

            <Box sx={{ display: 'flex', width: '80%', maxWidth: '960px' }}>
                {/* Shipping Address */}
                <Box sx={{ flex: 1, pr: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Shipping Address
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Full Name" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Phone Number" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Province/City" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="District" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Ward" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Street Address" fullWidth required />
                        </Grid>

                    </Grid>
                </Box>

                {/* Order Summary */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        Order Summary
                    </Typography>

                    {/* Items */}
                    <List dense>
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.name}
                                    secondary={`${item.quantity} x ${item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Divider />


                    {/* Totals */}
                    <Box sx={{ mt: 2 }}>

                        <Typography variant="h6">Order Total: {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Typography>
                    </Box>

                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
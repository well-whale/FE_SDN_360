import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { Delete, Add, Remove } from '@mui/icons-material';

export default function HiddenbarCart() {
    const [open, setOpen] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1,
            name: 'NULEEN Rice Container 12 KG. GN',
            price: 799000,
            originalPrice: 799000,
            quantity: 1,
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 2,
            name: 'NULEEN Rice Container 12 KG. GN',
            price: 799000,
            originalPrice: 799000,
            quantity: 1,
            image: 'https://via.placeholder.com/100',
        }
    ]);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    const handleQuantityChange = (id, amount) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    const list = (
        <Box sx={{ width: 400, padding: 2 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                    CART ({cartItems.length})
                </Typography>
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            {cartItems.map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', padding: 1, borderBottom: '1px solid #ddd' }}>
                    <img src={item.image} alt={item.name} width={80} height={80} style={{ marginRight: 10 }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography fontSize={14} fontWeight="bold">{item.name}</Typography>
                        <Typography fontSize={14} color="error">{item.price.toLocaleString()}₫</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}>
                                <Remove />
                            </IconButton>
                            <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                            <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}>
                                <Add />
                            </IconButton>
                        </Box>
                    </Box>
                    <IconButton><Delete /></IconButton>
                </Box>
            ))}
            <Divider sx={{ my: 2 }} />


            <Typography fontSize={16} fontWeight="bold" sx={{ mt: 2 }}>Order Total: {total.toLocaleString()}₫</Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'orange' }}>PROGRESSIVE ORDERING</Button>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Right Drawer</Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
        </div>
    );
}

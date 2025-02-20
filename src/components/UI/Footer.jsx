import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We offer the best deals on high-quality home essentials. Shop with us and save big!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Products
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              FAQs
            </Link>
          </Grid>

          {/* Customer Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Customer Support
            </Typography>
            <Typography variant="body2">Email: support@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
            <Typography variant="body2">Hours: Mon-Fri, 9AM - 6PM</Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 3, borderTop: "1px solid #555", pt: 2 }}>
          <Typography variant="body2">© 2025 Your Store. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

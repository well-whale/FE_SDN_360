import React from "react";
import {
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#f8efe4",
        color: "#000",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section - Logo */}
        <Box sx={{ display: "flex", marginLeft: "60px", cursor: "pointer" }} onClick={() => navigate('/')}>
          <img
            src="../src/assets/logo360.png"
            alt="Logo"
            width="130px"
            height="100px"
            style={{ borderRadius: "100px" }}
          />
        </Box>

        {/* Search Input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 10,
            px: 2,
            width: "500px",
            height: "40px",
          }}
        >
          <TextField
            variant="standard"
            placeholder="Tìm kiếm..."
            InputProps={{ disableUnderline: true }}
            sx={{ flex: 1 }}
          />
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Right Section - Search Bar & Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginRight: "65px",
          }}
        >
          {/* Account Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "20px",
              px: 2,
            }}
          >
            <AccountCircleIcon sx={{ mr: 1 }} />
            Tài khoản
          </Button>

          {/* Shopping Cart Icon */}
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>

          {/* Vietnam Flag */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
            alt="Vietnam Flag"
            width="24px"
          />
        </Box>
      </Toolbar>

      {/* Navigation Bar - Sticky */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#f8efe4",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid #ddd",
          gap: 5, 
          padding: "2px 0",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* SẢN PHẨM */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="body2" fontWeight="bold" sx={{ color: "black" }} component={Link} to="/products">
            SẢN PHẨM
          </Typography>
        </Box>

        {/* Dấu | giữa "SẢN PHẨM" và "TIN TỨC" */}
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          |
        </Typography>

        {/* Danh sách menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          {["TIN TỨC", "KHUYẾN MÃI", "HÀNG MỚI VỀ", "OUTLET GIÁ SỐC"].map(
            (item, index) => (
              <React.Fragment key={index}>
                <Typography variant="body2" fontWeight="bold">
                  {item}
                </Typography>
                {index < 3 && (
                  <Typography variant="body2" sx={{ color: "#ccc" }}>
                    |
                  </Typography>
                )}
              </React.Fragment>
            )
          )}
        </Box>

        {/* Dấu | trước "ÁP DỤNG KHI MUA ONLINE" */}
        <Typography variant="body2" sx={{ color: "#ccc" }}>
          |
        </Typography>

        {/* ÁP DỤNG KHI MUA ONLINE */}
        <Typography variant="body2" sx={{ color: "red", fontWeight: "bold" }}>
          ÁP DỤNG KHI MUA ONLINE
        </Typography>
      </Box>
    </div>
  );
};

export default Header;

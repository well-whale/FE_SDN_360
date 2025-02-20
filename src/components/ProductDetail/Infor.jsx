import { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";

const Infor = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <Box sx={{ padding: "20px 60px" }}>
      <Box
        mt={1}
        sx={{
          borderBottom: "1px solid #b3b3b3",
          py: 1,
        }}
      >
        {/* Product Name */}
        <Typography variant="h5" fontWeight="bold" color="#333">
          Thảm Ngoài Trời COCO-FLORAL 75x45cm
        </Typography>

        {/* Price */}
        <Typography variant="h5" fontWeight="bold" color="black" mt={1}>
          349.000 đ
        </Typography>
      </Box>
      {/* SKU & Stock */}
      <Box
        mt={1}
        sx={{
          borderBottom: "1px solid #b3b3b3",
          py: 1,
        }}
      >
        <Typography variant="body1" color="#333">
          <strong>SKU:</strong> 170133497
        </Typography>
      </Box>
      <Box
        mt={1}
        sx={{
          borderBottom: "1px solid #b3b3b3",
          py: 1,
        }}
      >
        <Typography variant="body1" color="#333">
          <strong>Kho hàng:</strong> Có sẵn hàng để vận chuyển
        </Typography>
      </Box>
      {/* Quantity Selector */}
      <Box mt={2} display="flex" alignItems="center">
        <Typography variant="body1" sx={{ mr: 2 }} color="#333">
          Số lượng:
        </Typography>
        <IconButton
          onClick={() => handleQuantityChange("decrease")}
          size="small"
        >
          <Remove />
        </IconButton>
        <Typography sx={{ mx: 2, color: "#333" }}>{quantity}</Typography>
        <IconButton
          onClick={() => handleQuantityChange("increase")}
          size="small"
        >
          <Add />
        </IconButton>
      </Box>

      {/* Buttons */}
      <Box mt={3} display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f2c200",
            color: "black",
            flex: 1,
            fontWeight: "bold",
          }}
        >
          THÊM VÀO GIỎ
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "white",
            flex: 1,
            fontWeight: "bold",
          }}
        >
          MUA NGAY
        </Button>
      </Box>
    </Box>
  );
};

export default Infor;

import { Grid, Box, Typography, Button, Divider } from "@mui/material";
import pro1 from "../../assets/products/pro1.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Thảm Ngoài Trời COCO-FLORAL 75x45cm",
    price: "349.000 ₫",
    image: pro1,
  },
  {
    name: "Tượng Trang Trí Hươu REINDERA 16.7cm",
    price: "349.000 ₫",
    image: pro1,
  },
  {
    name: "Khăn Bếp MUJIN",
    price: "199.000 ₫",
    image: pro1,
  },
  {
    name: "Rèm Cửa Chính GRADA",
    price: "699.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
  {
    name: "Đồng Hồ Treo Tường TIMETIMA",
    price: "1.990.000 ₫",
    image: pro1,
  },
];

const Buy1Get1Section = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, textAlign: "left", color: "#333" }}>
        MUA 1 TẶNG 1
      </Typography>
      <Divider sx={{ mb: 4, borderColor: "#ddd" }} />

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Box
              sx={{
                position: "relative",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                backgroundColor: "#fff",
                "&:hover": { boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" },
                cursor: "pointer",
              }}
              onClick={() => navigate('/product')} // Sửa lỗi tại đây
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#c62828",
                  color: "#fff",
                  padding: "5px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                MUA 1 TẶNG 1
              </Box>

              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "5px" }}
              />

              <Typography variant="body2" fontWeight="bold" sx={{ mt: 1, color: "#333", height: "40px" }}>
                {product.name}
              </Typography>

              <Typography variant="body2" sx={{ color: "red", fontWeight: "bold" }}>
                {product.price}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "20px",
          px: 4,
          "&:hover": { backgroundColor: "#333" },
        }}
      >
        Xem Tất Cả Sản Phẩm
      </Button>
    </Box>
  );
};

export default Buy1Get1Section;

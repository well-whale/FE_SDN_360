import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Rating,
  TextField,
  Button,
} from "@mui/material";

const ProductReview = () => {
  const [review, setReview] = useState({
    value: 0,
    quality: 0,
    rating: 0,
    price: 0,
  });

  const handleRatingChange = (key, newValue) => {
    setReview((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <Box sx={{ mt: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" color="primary">
        BẠN ĐANG ĐÁNH GIÁ: THẢM NGOÀI TRỜI COCO-FLORAL 75X45CM
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2, color: "#333" }}>
        {["Value", "Quality", "Rating", "Price"].map((item) => (
          <Grid item xs={6} key={item}>
            <Typography>{item}</Typography>
            <Rating
              value={review[item.toLowerCase()]}
              onChange={(event, newValue) =>
                handleRatingChange(item.toLowerCase(), newValue)
              }
            />
          </Grid>
        ))}
      </Grid>

      {/* Review Form */}
      <TextField fullWidth label="Biệt danh" sx={{ mt: 2 }} />
      <TextField fullWidth label="Tiêu đề" sx={{ mt: 2 }} />
      <TextField
        fullWidth
        label="Đánh giá *"
        multiline
        rows={4}
        sx={{ mt: 2 }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="warning"
        sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
      >
        GỬI ĐÁNH GIÁ
      </Button>
    </Box>
  );
};

export default ProductReview;

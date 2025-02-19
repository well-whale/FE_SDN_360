import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";

const productDetails = [
  { label: "Chất liệu", value: "Vải Tự Nhiên Khác" },
  { label: "Màu sắc", value: "Màu Gỗ Tự Nhiên" },
  {
    label: "Kích thước",
    value: "Chiều Dài: 75cm - Chiều Rộng: 45cm - Chiều Dày: 1.5cm",
  },
  { label: "Bộ sưu tập", value: "COCO-FLORAL" },
  { label: "Phong cách", value: "Modern Italian" },
  { label: "Thương hiệu", value: "Index Living Mall" },
];

const ProductDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box sx={{ width: "100%", mt: 1, border: "1px solid #ddd", borderRadius: 2 }}>
      {/* Tabs for switching sections */}
      <Tabs
        value={tabIndex}
        onChange={(event, newValue) => setTabIndex(newValue)}
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "black" }, // Indicator color
          "& .MuiTab-root": {
            color: "#333",
            fontSize: "16px",
            fontWeight: "normal",
            border: "none", // Ensure no border
          },
          "& .MuiTab-root.Mui-selected": {
            fontWeight: "bold",
            color: "black",
            border: "none", // Remove border when selected
            outline: "none", // Prevent focus outline
          },
        }}
      >
        <Tab label="CHI TIẾT" />
        <Tab label="HƯỚNG DẪN BẢO QUẢN" sx={{ color: "gray" }} />
      </Tabs>

      {/* Product Details Table */}
      {tabIndex === 0 && (
        <TableContainer component={Paper} sx={{ boxShadow: "none", borderRadius: 2  }}>
          <Table>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f8f8f8" : "white",
                  }}
                >
                  <TableCell sx={{ fontWeight: "bold", width: "30%" }}>
                    ✱ {detail.label}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Placeholder for "Care Instructions" */}
      {tabIndex === 1 && (
        <Box sx={{ p: 2, color: "#333" }}>
          <Typography variant="body1">
            Thông tin hướng dẫn bảo quản sẽ được cập nhật sau.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;

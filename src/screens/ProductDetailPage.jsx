import ImageGallery from "../components/ProductDetail/ImageGallery";
import Infor from "../components/ProductDetail/Infor";
import ProductDetails from "../components/ProductDetail/ProductDetails";
import ProductReview from "../components/ProductDetail/ProductReview";

import { Box } from "@mui/material";
import pro1 from "../assets/products/pro1.jpg";
import bed from "../assets/category/bed.jpg";
import cabinet from "../assets/category/cabinet.jpg";
import desk from "../assets/category/desk.jpg";

const images = [pro1, cabinet, bed, desk, pro1];

const ProductPage = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 2 }}>
      {/* Image & Info Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <ImageGallery images={images} />
        <Infor />
      </Box>

      {/* Product Details Section */}
      <Box sx={{ mt: 4 }}>
        <ProductDetails />
        <ProductReview />
      </Box>
    </Box>
  );
};

export default ProductPage;

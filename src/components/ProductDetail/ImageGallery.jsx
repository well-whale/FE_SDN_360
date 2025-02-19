import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
      setCurrentIndex(0);
    }
  }, [images]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* Main Selected Image */}
      {selectedImage && (
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: "450px",
              height: "450px",
              borderRadius: "6px",
              objectFit: "cover",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
      )}

      {/* Thumbnail Navigation */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={2}
        sx={{ width: "100%", maxWidth: "600px" }}
      >
        {/* Previous Button */}
        <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowBackIos />
        </IconButton>

        {/* Image Thumbnails */}
        <Box display="flex" gap={1} overflow="hidden">
          {images.map((item, index) => (
            <Box
              key={index}
              onClick={() => {
                setSelectedImage(item);
                setCurrentIndex(index);
              }}
              sx={{
                cursor: "pointer",
                borderRadius: "6px",
                transition: "0.3s",
              }}
            >
              <img
                src={item}
                alt={`Image ${index + 1}`}
                style={{
                  borderRadius: "6px",
                  height: "70px",
                  width: "70px",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Next Button */}
        <IconButton onClick={handleNext} disabled={currentIndex === images.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

// PropTypes definition
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

// Default props
ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;

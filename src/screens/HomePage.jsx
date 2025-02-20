import BannerSlider from "../components/HomePage/BannerSlider";
import CategorySection from "../components/HomePage/CategorySection";
import ProductsSection from "../components/HomePage/ProductsSection";

const Homepage = () => {
  return (
    <div style={styles.container}>
      {/* Banner Slider */}
      <div style={styles.bannerSection}>
        <BannerSlider />
      </div>

      {/* Category & Products */}
      <div style={styles.productsSection}>
        <CategorySection />
        <ProductsSection />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  bannerSection: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  productsSection: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
};

export default Homepage;

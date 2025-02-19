import BannerSlider from "./BannerSlider";
import CategorySection from "./CategorySection";
import ProductsSection from "./ProductsSection";

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

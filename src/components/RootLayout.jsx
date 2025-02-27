import { Outlet } from "react-router-dom";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";
import CustomSeparator from "./UI/Breadcrumbs.jsx";

function RootLayout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />

      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f5f5f5" }}>
        {location.pathname !== "/" && <CustomSeparator />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;

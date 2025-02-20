import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "../pages/Order/Order";
import OrderDetail from "../components/OderManager/OrderDetail";
import OrderDetailManager from "../pages/OrderDetail/OrderDetailManager";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/order/:orderId" element={<OrderDetailManager />} />
      </Routes>
    </Router>
  );
}

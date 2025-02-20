import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./OrderManager.css";
import getMockOrders from "../../../mock/mockOrder";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function OrderManager({ onViewDetail }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Tất cả",
    "Chờ xác nhận",
    "Đang vận chuyển",
    "Đã giao",
    "Đã hủy",
  ];

  const filterOrders = (index) => {
    const orders = getMockOrders();
    if (index === 0) return orders;
    return orders.filter(
      (order) => order.category === tabLabels[index].toUpperCase()
    );
  };

  const sortedOrders = (orders) => {
    return orders.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  return (
    <div className="order-container">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTab-root:focus": {
            outline: "none",
          },
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                ...(value === index && {
                  backgroundColor: "rgba(247, 138, 49, 0.78)",
                  color: "white",
                  borderRadius: "8px",
                  "&:focus": {
                    color: "white",
                  },
                }),
              }}
            />
          ))}
        </Tabs>
        <div className="order-content-container">
          {tabLabels.map((label, index) => (
            <CustomTabPanel value={value} index={index} key={index}>
              {sortedOrders(filterOrders(index)).length > 0 ? (
                sortedOrders(filterOrders(index)).map((order) => (
                  <div style={{ marginBottom: "30px" }} key={order.id}>
                    <div className="order-item">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 0",
                          borderBottom: "1px solid #ebdede",
                        }}
                      >
                        <Typography variant="h6" className="store-name">
                          {order.storeName}
                        </Typography>
                        <Typography className="order-status">
                          {order.status}
                        </Typography>
                      </div>
                      {order.items.map((item, idx) => (
                        <div
                          className="order-content"
                          key={idx}
                          onClick={console.log("aaaa")}
                        >
                          <div className="order-content-left">
                            <div className="order-details">
                              <img
                                src={item.image}
                                alt={item.description}
                                className="order-img"
                              />
                              <div className="order-description">
                                <Typography variant="h7">
                                  {item.description}
                                </Typography>
                                <Typography className="order-quantity">
                                  x{item.quantity}
                                </Typography>
                              </div>
                            </div>
                          </div>
                          <div className="order-content-right">
                            <Typography className="order-price">
                              {item.price}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="order-item order-item-2">
                      <Typography className="order-total">
                        Tổng tiền:{" "}
                        <span className="order-total-value">{order.total}</span>
                      </Typography>
                      <div className="order-actions">
                        <Button variant="contained" color="error">
                          Mua Lại
                        </Button>
                        <Button variant="outlined" onClick={() => onViewDetail(order.id)}>
                          Xem Chi Tiết
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Typography className="no-orders">
                  Không có đơn hàng nào
                </Typography>
              )}
            </CustomTabPanel>
          ))}
        </div>
      </Box>
    </div>
  );
}

OrderManager.propTypes = {
  onViewDetail: PropTypes.func.isRequired,
};

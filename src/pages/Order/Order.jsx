import * as React from "react";
import "./Order.css";
import OrderManager from "../../components/OderManager/OrderManager";
import { List, ListItem, ListItemText } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const [inProp, setInProp] = React.useState(true);
  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setInProp(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setInProp(true);
    }, 200);
  };

  const handleViewDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="order-container">
      <div className="order-box">
        {/* Sidebar */}
        <div className="sidebar">
          <List component="nav" className="sidebar-list">
            {["Thông Báo", "Tài Khoản Của Tôi", "Đơn Mua"].map((text, index) => (
              <ListItem
                key={index}
                button={true}
                className={`sidebar-item ${selectedIndex === index ? "active" : ""}`}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>

        {/* Nội dung với hiệu ứng chuyển động */}
        <div className="content">
          <CSSTransition in={inProp} timeout={300} classNames="fade" unmountOnExit>
            <div>
              {selectedIndex === 2 && <OrderManager onViewDetail={handleViewDetail} />}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

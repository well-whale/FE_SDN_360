import * as React from "react";
import "./OrderDetailManager.css";
import { List, ListItem, ListItemText } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import OrderDetail from "../../components/OderManager/OrderDetail";

export default function OrderDetailManager() {
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const [inProp, setInProp] = React.useState(true);

  const handleListItemClick = (event, index) => {
    setInProp(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setInProp(true);
    }, 200);
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
                button
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
         <OrderDetail/>
        </div>
      </div>
    </div>
  );
}

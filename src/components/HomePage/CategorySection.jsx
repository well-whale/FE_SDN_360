import { useState } from "react";
import sofa from "../../assets/category/sofa.jpg";
import bed from "../../assets/category/bed.jpg";
import dining from "../../assets/category/dining.jpg";
import cabinet from "../../assets/category/cabinet.jpg";
import desk from "../../assets/category/desk.jpg";

const categories = [
  { id: 1, name: "Sofa", image: sofa },
  { id: 2, name: "Nội thất phòng ngủ", image: bed },
  { id: 3, name: "Nội thất phòng ăn", image: dining },
  { id: 4, name: "Tủ kệ", image: cabinet },
  { id: 5, name: "Bàn ghế văn phòng", image: desk },
  { id: 6, name: "Ghế đơn", image: desk },
  { id: 7, name: "Hàng trang trí", image: sofa },
  { id: 8, name: "Sắp xếp & lưu trữ", image: dining },
  { id: 9, name: "Đồ dùng bàn ăn", image: dining },
  { id: 10, name: "Dụng cụ nấu ăn", image: cabinet },
];

const CategorySection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        alignContent: "center",
        justifyContent: "center",
        margin: "25px 0",
      }}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          style={{
            position: "relative",
            width: "80px",
            height: "120px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "border 0.3s ease",
            cursor: "pointer",
            border:
              hovered === category.id
                ? "2px solid gold"
                : "2px solid transparent",
          }}
          onMouseEnter={() => setHovered(category.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={category.image}
            alt={category.name}
            style={{
              position: "absolute",
              width: "70px",
              height: "60px",
              objectFit: "cover",
            }}
          />
          <p
            style={{
              position: "absolute",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "65px",
              color: "#000",
            }}
          >
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;

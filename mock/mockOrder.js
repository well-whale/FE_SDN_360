const getMockOrders = () => [
  {
    id: 1,
    storeName: "Nội Thất 5C Furniture",
    status: "ĐÃ HỦY",
    date: "2023-10-01",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Bàn làm việc chân chữ K, kệ lửng",
        price: "629.000đ",
        quantity: 1,
      },
    ],
    total: "629.000đ",
    category: "ĐÃ HỦY",
  },
  {
    id: 2,
    storeName: "MIJOBS Official Store",
    status: "ĐÃ HỦY",
    date: "2023-09-25",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Dây đeo kim loại Xiaomi Mi Band",
        price: "91.000đ",
        quantity: 1,
      },
    ],
    total: "91.000đ",
    category: "ĐÃ HỦY",
  },
  {
    id: 3,
    storeName: "Điện Máy Xanh",
    status: "CHỜ XÁC NHẬN",
    date: "2023-09-20",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Tủ lạnh Panasonic Inverter 255 lít",
        price: "8.990.000đ",
        quantity: 2,
      },
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Tủ lạnh Panasonic Inverter 255 lít",
        price: "8.990.000đ",
        quantity: 2,
      },
    ],
    total: "17.980.000đ",
    category: "CHỜ XÁC NHẬN",
  },
  {
    id: 4,
    storeName: "FPT Shop",
    status: "ĐANG VẬN CHUYỂN",
    date: "2023-09-18",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Laptop ASUS VivoBook 14",
        price: "12.490.000đ",
        quantity: 1,
      },
    ],
    total: "12.490.000đ",
    category: "ĐANG VẬN CHUYỂN",
  },
  {
    id: 5,
    storeName: "Tiki Trading",
    status: "ĐÃ GIAO",
    date: "2023-09-15",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Sách 'Thiên tài bên trái, kẻ điên bên phải'",
        price: "145.000đ",
        quantity: 1,
      },
    ],
    total: "145.000đ",
    category: "ĐÃ GIAO",
  },
  {
    id: 6,
    storeName: "Shopee Mall",
    status: "ĐÃ GIAO",
    date: "2023-09-10",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "iPhone 14 Pro Max 256GB",
        price: "27.990.000đ",
        quantity: 1,
      },
    ],
    total: "27.990.000đ",
    category: "ĐÃ GIAO",
  },
  {
    id: 7,
    storeName: "Lazada Official",
    status: "ĐÃ HỦY",
    date: "2023-09-05",
    items: [
      {
        image: "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
        description: "Tai nghe Sony WH-1000XM4",
        price: "6.990.000đ",
        quantity: 1,
      },
    ],
    total: "6.990.000đ",
    category: "ĐÃ HỦY",
  },
];

export default getMockOrders;

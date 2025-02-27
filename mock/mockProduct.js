const initialProducts = [
        { 
            id: 1, 
            name: 'Ghế Sofa COCO-FLORAL', 
            description: 'Ghế sofa cao cấp với thiết kế tinh tế, phù hợp với nhiều không gian nội thất hiện đại. Chất liệu vải tự nhiên mang đến cảm giác thoải mái, êm ái khi sử dụng.', 
            price: '3.500.000đ',
            quantity: 25,
            details: [
                { label: "Chất liệu", value: "Vải Tự Nhiên Khác" },
                { label: "Màu sắc", value: "Màu Gỗ Tự Nhiên" },
                { label: "Kích thước", value: "Chiều Dài: 175cm - Chiều Rộng: 85cm - Chiều Cao: 75cm" },
                { label: "Bộ sưu tập", value: "COCO-FLORAL" },
                { label: "Phong cách", value: "Modern Italian" },
                { label: "Thương hiệu", value: "Index Living Mall" }
            ],
            images: [
                "https://via.placeholder.com/800x600/e3f2fd/0d47a1?text=Sofa+COCO-FLORAL+1", 
                "https://via.placeholder.com/800x600/fff3e0/e65100?text=Sofa+COCO-FLORAL+2",
                "https://via.placeholder.com/800x600/f5f5f5/212121?text=Sofa+COCO-FLORAL+3"
            ]
        },
        { 
            id: 2, 
            name: 'Bàn làm việc Modern Office', 
            description: 'Bàn làm việc hiện đại với không gian lưu trữ rộng rãi, thích hợp cho văn phòng và góc làm việc tại nhà. Thiết kế thông minh giúp tối ưu hóa không gian sử dụng.', 
            price: '2.200.000đ', 
            quantity: 18,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ melamine" },
                { label: "Màu sắc", value: "Trắng kết hợp vân gỗ" },
                { label: "Kích thước", value: "L120 x W60 x H75 cm" },
                { label: "Trọng lượng", value: "25kg" },
                { label: "Xuất xứ", value: "Việt Nam" }
            ], 
            images: [
                "https://via.placeholder.com/800x600/fafafa/616161?text=Modern+Office+Desk+1",
                "https://via.placeholder.com/800x600/eceff1/263238?text=Modern+Office+Desk+2",
                "https://via.placeholder.com/800x600/f3e5f5/4a148c?text=Modern+Office+Desk+3",
                "https://via.placeholder.com/800x600/e8f5e9/1b5e20?text=Modern+Office+Desk+4"
            ] 
        },
        { 
            id: 3, 
            name: 'Đèn trang trí Moonlight', 
            description: 'Đèn trang trí phòng khách với ánh sáng dịu nhẹ, kiểu dáng hiện đại, tiết kiệm điện năng. Phù hợp với nhiều phong cách nội thất từ hiện đại đến cổ điển.', 
            price: '850.000đ', 
            quantity: 0,
            details: [
                { label: "Chất liệu", value: "Kim loại và thủy tinh" },
                { label: "Công suất", value: "15W" },
                { label: "Màu sắc", value: "Đen mờ" },
                { label: "Kích thước", value: "Đường kính 30cm, cao 45cm" },
                { label: "Xuất xứ", value: "Hàn Quốc" },
                { label: "Bảo hành", value: "12 tháng" }
            ], 
            images: [
                "https://via.placeholder.com/800x600/fce4ec/880e4f?text=Moonlight+Lamp+1",
                "https://via.placeholder.com/800x600/f3e5f5/4a148c?text=Moonlight+Lamp+2"
            ] 
        },
        {
            id: 4,
            name: 'Tủ quần áo Elegance',
            description: 'Tủ quần áo 4 cánh với thiết kế hiện đại, không gian rộng rãi và ngăn kéo tiện lợi. Phù hợp cho phòng ngủ lớn, giúp sắp xếp quần áo gọn gàng và khoa học.',
            price: '4.700.000đ',
            quantity: 7,
            details: [
                { label: "Chất liệu", value: "Gỗ công nghiệp MDF chống ẩm" },
                { label: "Màu sắc", value: "Nâu gỗ sồi" },
                { label: "Kích thước", value: "L180 x W60 x H200 cm" },
                { label: "Số ngăn", value: "4 cánh, 3 ngăn kéo, 2 ngăn phụ" },
                { label: "Xuất xứ", value: "Việt Nam" },
                { label: "Bảo hành", value: "24 tháng" }
            ],
            images: [
                "https://via.placeholder.com/800x600/ede7f6/4527a0?text=Elegance+Wardrobe+1",
                "https://via.placeholder.com/800x600/e8eaf6/283593?text=Elegance+Wardrobe+2",
                "https://via.placeholder.com/800x600/e3f2fd/0d47a1?text=Elegance+Wardrobe+3"
            ]
        },
        {
            id: 5,
            name: 'Bàn ăn Harmony',
            description: 'Bàn ăn hiện đại dành cho gia đình 6 người, thiết kế sang trọng với chân thép không gỉ và mặt bàn đá cẩm thạch nhân tạo cao cấp.',
            price: '5.900.000đ',
            quantity: 4,
            details: [
                { label: "Chất liệu mặt bàn", value: "Đá cẩm thạch nhân tạo" },
                { label: "Chất liệu chân bàn", value: "Thép không gỉ mạ chrome" },
                { label: "Màu sắc", value: "Trắng vân đá / Chân bạc" },
                { label: "Kích thước", value: "L180 x W90 x H75 cm" },
                { label: "Số người sử dụng", value: "6-8 người" },
                { label: "Xuất xứ", value: "Malaysia" }
            ],
            images: [
                "https://via.placeholder.com/800x600/f5f5f5/212121?text=Harmony+Dining+Table+1",
                "https://via.placeholder.com/800x600/fafafa/616161?text=Harmony+Dining+Table+2",
                "https://via.placeholder.com/800x600/eceff1/263238?text=Harmony+Dining+Table+3"
            ]
        },
        {
            id: 6,
            name: 'Giường ngủ Comfort Plus',
            description: 'Giường ngủ đôi với thiết kế tối giản, hiện đại nhưng không kém phần sang trọng. Đầu giường bọc nệm êm ái, phù hợp để dựa lưng khi đọc sách.',
            price: '7.200.000đ',
            quantity: 12,
            details: [
                { label: "Chất liệu", value: "Gỗ tự nhiên kết hợp MDF" },
                { label: "Màu sắc", value: "Nâu gỗ óc chó" },
                { label: "Kích thước", value: "L200 x W180 x H100 cm" },
                { label: "Kích cỡ đệm", value: "King Size (180x200cm)" },
                { label: "Phong cách", value: "Minimalist Nordic" },
                { label: "Bảo hành", value: "36 tháng" }
            ],
            images: [
                "https://via.placeholder.com/800x600/fff3e0/e65100?text=Comfort+Plus+Bed+1",
                "https://via.placeholder.com/800x600/fbe9e7/bf360c?text=Comfort+Plus+Bed+2",
                "https://via.placeholder.com/800x600/ffebee/b71c1c?text=Comfort+Plus+Bed+3",
                "https://via.placeholder.com/800x600/e0f7fa/006064?text=Comfort+Plus+Bed+4"
            ]
        },
        {
            id: 7,
            name: 'Kệ tivi Modern Living',
            description: 'Kệ tivi đa năng với thiết kế thông minh, tích hợp không gian lưu trữ rộng rãi cho đầu đĩa, loa và các thiết bị giải trí khác.',
            price: '3.100.000đ',
            quantity: 22,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ veneer" },
                { label: "Màu sắc", value: "Nâu gỗ sồi kết hợp trắng" },
                { label: "Kích thước", value: "L180 x W45 x H50 cm" },
                { label: "Kích thước TV phù hợp", value: "32-65 inch" },
                { label: "Số ngăn chứa", value: "4 ngăn kéo, 2 ngăn mở" },
                { label: "Xuất xứ", value: "Việt Nam" }
            ],
            images: [
                "https://via.placeholder.com/800x600/e8f5e9/1b5e20?text=Modern+Living+TV+Stand+1",
                "https://via.placeholder.com/800x600/f1f8e9/33691e?text=Modern+Living+TV+Stand+2",
                "https://via.placeholder.com/800x600/dcedc8/558b2f?text=Modern+Living+TV+Stand+3"
            ]
        },
        {
            id: 8,
            name: 'Bàn trà Simplicity',
            description: 'Bàn trà phòng khách với thiết kế tối giản, chân gỗ tự nhiên, mặt kính cường lực sang trọng. Kết hợp với ghế sofa tạo không gian tiếp khách lịch sự.',
            price: '1.850.000đ',
            quantity: 0,
            details: [
                { label: "Chất liệu mặt bàn", value: "Kính cường lực 10mm" },
                { label: "Chất liệu chân bàn", value: "Gỗ sồi tự nhiên" },
                { label: "Màu sắc", value: "Mặt kính trong / Chân gỗ tự nhiên" },
                { label: "Kích thước", value: "L120 x W60 x H45 cm" },
                { label: "Tải trọng tối đa", value: "50kg" },
                { label: "Phong cách", value: "Scandinavian" }
            ],
            images: [
                "https://via.placeholder.com/800x600/e0f2f1/004d40?text=Simplicity+Coffee+Table+1",
                "https://via.placeholder.com/800x600/e0f7fa/006064?text=Simplicity+Coffee+Table+2"
            ]
        },
        {
            id: 9,
            name: 'Ghế văn phòng Ergonomic Pro',
            description: 'Ghế văn phòng cao cấp với thiết kế công thái học, hỗ trợ cột sống và giảm mệt mỏi khi ngồi làm việc lâu. Tích hợp nhiều tính năng điều chỉnh theo ý muốn.',
            price: '4.500.000đ',
            quantity: 15,
            details: [
                { label: "Chất liệu khung", value: "Hợp kim nhôm" },
                { label: "Chất liệu đệm", value: "Foam đàn hồi cao cấp" },
                { label: "Chất liệu bọc", value: "Vải lưới thoáng khí" },
                { label: "Màu sắc", value: "Đen" },
                { label: "Tải trọng tối đa", value: "150kg" },
                { label: "Tính năng", value: "Điều chỉnh độ cao, tựa lưng, tựa đầu, tay vịn 4D" },
                { label: "Bảo hành", value: "36 tháng" }
            ],
            images: [
                "https://via.placeholder.com/800x600/fafafa/616161?text=Ergonomic+Pro+Chair+1",
                "https://via.placeholder.com/800x600/f5f5f5/212121?text=Ergonomic+Pro+Chair+2",
                "https://via.placeholder.com/800x600/eeeeee/424242?text=Ergonomic+Pro+Chair+3",
                "https://via.placeholder.com/800x600/e0e0e0/757575?text=Ergonomic+Pro+Chair+4"
            ]
        },
        {
            id: 10,
            name: 'Tủ bếp Modern Kitchen',
            description: 'Tủ bếp treo tường với thiết kế hiện đại, tối ưu không gian lưu trữ. Chất liệu chống ẩm, dễ dàng vệ sinh, phù hợp với mọi căn bếp.',
            price: '5.200.000đ',
            quantity: 6,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ Acrylic bóng gương" },
                { label: "Màu sắc", value: "Trắng bóng kết hợp vân gỗ" },
                { label: "Kích thước", value: "L240 x W60 x H80 cm" },
                { label: "Phụ kiện", value: "Bản lề giảm chấn, ray trượt, tay nắm inox" },
                { label: "Số ngăn", value: "6 cánh, 4 ngăn kéo" },
                { label: "Chống thấm", value: "Công nghệ chống ẩm Moisture Guard" },
                { label: "Xuất xứ", value: "Việt Nam" }
            ],
            images: [
                "https://via.placeholder.com/800x600/f3e5f5/4a148c?text=Modern+Kitchen+Cabinet+1",
                "https://via.placeholder.com/800x600/ede7f6/4527a0?text=Modern+Kitchen+Cabinet+2",
                "https://via.placeholder.com/800x600/e8eaf6/283593?text=Modern+Kitchen+Cabinet+3"
            ]
        },
        {
            id: 11,
            name: 'Kệ sách Bookworm',
            description: 'Kệ sách đa năng với thiết kế mở, linh hoạt trang trí và sắp xếp. Tối ưu không gian lưu trữ sách và đồ trang trí, phù hợp với nhiều không gian sống.',
            price: '2.400.000đ',
            quantity: 9,
            details: [
                { label: "Chất liệu", value: "Gỗ công nghiệp MDF" },
                { label: "Màu sắc", value: "Trắng / Nâu gỗ sồi" },
                { label: "Kích thước", value: "L120 x W30 x H180 cm" },
                { label: "Số tầng", value: "6 tầng" },
                { label: "Tải trọng mỗi tầng", value: "15kg" },
                { label: "Kiểu dáng", value: "Kệ mở đa năng" }
            ],
            images: [
                "https://via.placeholder.com/800x600/fff3e0/e65100?text=Bookworm+Shelf+1",
                "https://via.placeholder.com/800x600/ffe0b2/ef6c00?text=Bookworm+Shelf+2",
                "https://via.placeholder.com/800x600/ffcc80/f57c00?text=Bookworm+Shelf+3"
            ]
        },
        {
            id: 12,
            name: 'Tủ giày Smart Home',
            description: 'Tủ giày thông minh với thiết kế tiết kiệm không gian, bề mặt gương trang trí giúp căn nhà thêm rộng rãi. Dễ dàng sắp xếp và tìm kiếm giày dép.',
            price: '1.950.000đ',
            quantity: 0,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ melamine" },
                { label: "Màu sắc", value: "Trắng bóng" },
                { label: "Kích thước", value: "L100 x W24 x H120 cm" },
                { label: "Sức chứa", value: "18-24 đôi giày" },
                { label: "Tính năng đặc biệt", value: "Cánh tủ gương, ngăn kéo" },
                { label: "Kiểu dáng", value: "Tủ đứng tiết kiệm diện tích" }
            ],
            images: [
                "https://via.placeholder.com/800x600/eceff1/263238?text=Smart+Home+Shoe+Cabinet+1",
                "https://via.placeholder.com/800x600/cfd8dc/455a64?text=Smart+Home+Shoe+Cabinet+2"
            ]
        },
        {
            id: 13,
            name: 'Bàn trang điểm Vanity',
            description: 'Bàn trang điểm sang trọng với gương LED tích hợp, ngăn kéo rộng rãi và thiết kế hiện đại. Giúp không gian phòng ngủ thêm tinh tế và đẳng cấp.',
            price: '3.600.000đ',
            quantity: 13,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ sơn UV cao cấp" },
                { label: "Màu sắc", value: "Trắng ngọc trai" },
                { label: "Kích thước", value: "L120 x W45 x H140 cm" },
                { label: "Gương", value: "Gương LED cảm ứng, điều chỉnh 3 chế độ ánh sáng" },
                { label: "Ngăn chứa", value: "5 ngăn kéo, 1 khoang mở" },
                { label: "Phong cách", value: "Modern Luxury" }
            ],
            images: [
                "https://via.placeholder.com/800x600/e8eaf6/283593?text=Vanity+Dressing+Table+1",
                "https://via.placeholder.com/800x600/e3f2fd/0d47a1?text=Vanity+Dressing+Table+2",
                "https://via.placeholder.com/800x600/e1f5fe/01579b?text=Vanity+Dressing+Table+3",
                "https://via.placeholder.com/800x600/e0f7fa/006064?text=Vanity+Dressing+Table+4"
            ]
        },
        {
            id: 14,
            name: 'Đèn sàn Nordic Light',
            description: 'Đèn sàn với thiết kế Bắc Âu tối giản, chân gỗ tự nhiên kết hợp chao đèn vải cao cấp. Tạo điểm nhấn trang trí và ánh sáng ấm cúng cho không gian sống.',
            price: '1.250.000đ',
            quantity: 8,
            details: [
                { label: "Chất liệu chân đèn", value: "Gỗ sồi tự nhiên" },
                { label: "Chất liệu chao đèn", value: "Vải lanh cao cấp" },
                { label: "Màu sắc", value: "Chân gỗ tự nhiên / Chao màu be" },
                { label: "Kích thước", value: "Đường kính chao 35cm, cao 160cm" },
                { label: "Công suất", value: "40W" },
                { label: "Loại bóng", value: "E27, LED" },
                { label: "Điều khiển", value: "Công tắc chân" }
            ],
            images: [
                "https://via.placeholder.com/800x600/fbe9e7/bf360c?text=Nordic+Light+Floor+Lamp+1",
                "https://via.placeholder.com/800x600/ffccbc/d84315?text=Nordic+Light+Floor+Lamp+2"
            ]
        },
        {
            id: 15,
            name: 'Giá treo quần áo Industrial',
            description: 'Giá treo quần áo phong cách công nghiệp với kết cấu sắt mạnh mẽ và gỗ tự nhiên. Thiết kế mở giúp dễ dàng sắp xếp và lựa chọn trang phục hàng ngày.',
            price: '950.000đ',
            quantity: 17,
            details: [
                { label: "Chất liệu", value: "Khung sắt sơn tĩnh điện, kệ gỗ" },
                { label: "Màu sắc", value: "Đen mờ / Gỗ tự nhiên" },
                { label: "Kích thước", value: "L120 x W40 x H170 cm" },
                { label: "Tính năng", value: "Thanh treo, kệ để giày, móc treo phụ kiện" },
                { label: "Tải trọng", value: "50kg" },
                { label: "Phong cách", value: "Industrial / Loft" }
            ],
            images: [
                "https://via.placeholder.com/800x600/f5f5f5/212121?text=Industrial+Clothes+Rack+1",
                "https://via.placeholder.com/800x600/eeeeee/424242?text=Industrial+Clothes+Rack+2",
                "https://via.placeholder.com/800x600/e0e0e0/757575?text=Industrial+Clothes+Rack+3"
            ]
        },
        {
            id: 16,
            name: 'Bàn console Entryway',
            description: 'Bàn console trang trí lối vào với thiết kế mảnh mai, thanh lịch. Kết hợp hoàn hảo giữa gỗ và kim loại, tạo điểm nhấn cho không gian lối vào nhà.',
            price: '2.750.000đ',
            quantity: 11,
            details: [
                { label: "Chất liệu mặt bàn", value: "Gỗ sồi tự nhiên" },
                { label: "Chất liệu khung", value: "Sắt mạ đồng" },
                { label: "Màu sắc", value: "Gỗ tự nhiên / Đồng cổ" },
                { label: "Kích thước", value: "L120 x W35 x H80 cm" },
                { label: "Ngăn kéo", value: "2 ngăn" },
                { label: "Phong cách", value: "Contemporary Classic" }
            ],
            images: [
                "https://via.placeholder.com/800x600/fff8e1/f57f17?text=Entryway+Console+Table+1",
                "https://via.placeholder.com/800x600/fffde7/f9a825?text=Entryway+Console+Table+2",
                "https://via.placeholder.com/800x600/fffde7/fbc02d?text=Entryway+Console+Table+3"
            ]
        },
        {
            id: 17,
            name: 'Tủ rượu Wine Lover',
            description: 'Tủ rượu thiết kế sang trọng, tích hợp đèn LED và kệ treo ly. Nơi lý tưởng để lưu trữ và trưng bày bộ sưu tập rượu của bạn một cách đẳng cấp.',
            price: '6.800.000đ',
            quantity: 4,
            details: [
                { label: "Chất liệu", value: "Gỗ MDF phủ veneer, kính cường lực" },
                { label: "Màu sắc", value: "Nâu đen / Kính trong" },
                { label: "Kích thước", value: "L100 x W45 x H180 cm" },
                { label: "Sức chứa", value: "24 chai rượu, 12 ly" },
                { label: "Tính năng", value: "Đèn LED, kệ treo ly, ngăn để rượu" },
                { label: "Kiểu dáng", value: "Tủ đứng kết hợp quầy bar" },
                { label: "Xuất xứ", value: "Italia" }
            ],
            images: [
                "https://via.placeholder.com/800x600/efebe9/4e342e?text=Wine+Lover+Cabinet+1",
                "https://via.placeholder.com/800x600/d7ccc8/5d4037?text=Wine+Lover+Cabinet+2",
                "https://via.placeholder.com/800x600/bcaaa4/6d4c41?text=Wine+Lover+Cabinet+3",
                "https://via.placeholder.com/800x600/a1887f/795548?text=Wine+Lover+Cabinet+4"
            ]
        },
        
];
export default initialProducts
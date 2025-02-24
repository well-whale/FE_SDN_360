import { useParams } from "react-router-dom";

export default function CustomerDetail() {
  const { customerId } = useParams();

  return (
    <div>
      <h1>Thông tin khách hàng {customerId}</h1>
      <p>Lịch sử mua hàng sẽ hiển thị tại đây...</p>
    </div>
  );
}

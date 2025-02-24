import { Link } from "react-router-dom";

const customers = [
  { id: 1, name: "Lộc", email: "loc@example.com" },
  { id: 2, name: "Nguyễn Văn A", email: "nguyenvana@example.com" },
];

export default function CustomerList() {
  return (
    <div>
      <h1>Danh sách khách hàng</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} className="border p-2 mb-2">
            <Link to={`/admin/customers/${customer.id}`}>
              {customer.name} - {customer.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$99", color: "bg-pink-200" },
  { id: 2, name: "Smart Watch", price: "$149", color: "bg-yellow-200" },
  { id: 3, name: "Gaming Mouse", price: "$49", color: "bg-green-200" },
  { id: 4, name: "Mechanical Keyboard", price: "$89", color: "bg-blue-200" },
];

const ProductList = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className={`${product.color} p-6 rounded-xl shadow-lg text-center`}
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg font-bold text-indigo-700">{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$99", desc: "Noise-cancelling over-ear headphones with long battery life." },
  { id: 2, name: "Smart Watch", price: "$149", desc: "Fitness tracking, notifications, and stylish design." },
  { id: 3, name: "Gaming Mouse", price: "$49", desc: "High DPI, customizable buttons, RGB lighting." },
  { id: 4, name: "Mechanical Keyboard", price: "$89", desc: "Tactile keys, RGB backlight, durable switches." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-600">Product not found!</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-yellow-100 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-800 mb-3">{product.name}</h2>
      <p className="text-lg font-semibold text-pink-700">{product.price}</p>
      <p className="mt-3 text-indigo-900">{product.desc}</p>

      <Link
        to="/"
        className="mt-6 inline-block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;

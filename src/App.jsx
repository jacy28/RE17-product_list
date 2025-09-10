import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-purple-50 text-indigo-900">
      {/* Navbar */}
      <nav className="bg-pink-500 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white">Product Store</h1>
        <Link to="/" className="text-yellow-300 hover:text-white font-semibold">
          Home
        </Link>
      </nav>

      {/* Page Content */}
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-teal-500 text-center p-4 text-white font-medium">
        <p>© 2025 Product Store</p>
      </footer>
    </div>
  );
};

export default App;

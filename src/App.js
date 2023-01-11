import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import store from "./app/store";
import { Provider } from "react-redux";
import Products from "./app/features/products/Products";
import ProductDetail from "./app/features/products/ProductDetail";
import ShopCart from "./app/features/cart/ShopCart";
import Home from "./components/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

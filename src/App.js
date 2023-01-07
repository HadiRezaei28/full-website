import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import store from "./app/store";
import { Provider } from "react-redux";
import Products from "./app/features/products/Products";
import ProductDetail from "./app/features/products/ProductDetail";

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
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

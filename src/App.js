import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NewProduct from "./pages/NewProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import StoreData from "./components/StoreData";

function App() {
  const [productId, setProductId] = useState(null);
  const handleProductSelection = (id) => {
    setProductId(id);
  };

  const product = StoreData.find(item => item.id === productId);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<OurStore />} />
              <Route path="product/:id" element={<SingleProduct product={StoreData} />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="blog/:id" element={<SingleBlog />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="compare-product" element={<CompareProduct />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="login" element={<Login />} />
              <Route path="new" element={<NewProduct />} />
              <Route path="forgot-password" element={<Forgotpassword />} />
              <Route path="signup" element={<Signup />} />
              <Route path="reset-password" element={<Resetpassword />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="refund-policy" element={<RefundPloicy />} />
              <Route path="shipping-policy" element={<ShippingPolicy />} />
              <Route path="term-conditions" element={<TermAndContions />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

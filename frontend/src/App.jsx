import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import UserAccount from "./userAccount/UserAccount";
import SignIn from "./userAccount/signIn/SignIn";
import SignUp from "./userAccount/signUp/SignUp";
import { useEffect, useState } from "react";
import ForgetPassword from "./userAccount/signIn/ForgetPassword";
import ResetPassword from "./userAccount/signIn/ResetPassword";
import Index from "./shop_page/Index";
import Product_Index from "./product_page/Product_Index";
import Cart from "./shoping_cart/Cart";
import Checkout from "./checkout_page/Checkout";
import Wishlist_Index from "./wishlist/Wishlist_Index";
import Notification_Index from "./notification/Notification_Index";
import Account from "./account/Account";
import Dashboard from "./account/dashboard/Dashboard";
import Card_Address from "./account/cards_and_address/Card_Address";
import Order_History from "./account/order_history/Order_History";
import Profile_Index from "./account/profile_setting/Profile_Index";
import Home from "./home/Home";
import { AuthProvider, useAuth } from "./Store/context/AuthContext";
import PrivateRoute from "./userAccount/PrivateRoute";

function App() {
  const [isForget, setIsForget] = useState(false);
  // console.log(isForget);

  function handleIsForget() {
    setIsForget((prevstate) => !prevstate);
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Notification_Index />
        <Routes>
          <Route path="/" element={<UserAccount isForget={isForget} />}>
            <Route index element={<SignIn setIsForget={handleIsForget} />} />
            <Route path="signUp" element={<SignUp />} />
            <Route
              path="forgotPassword"
              element={<ForgetPassword setIsForget={handleIsForget} />}
            />
            <Route
              path="resetPassword"
              element={<ResetPassword setIsForget={handleIsForget} />}
            />
          </Route>
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="" element={<Home />}>
              <Route index element={<Index />} />
              <Route path="shop_page" element={<Index />} />
              <Route path="product_page/:id" element={<Product_Index />} />
              <Route path="shoping_cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="wishlist" element={<Wishlist_Index />} />
              <Route path="dashboard" element={<Account />}>
                <Route index element={<Dashboard />} />
                <Route path="address" element={<Card_Address />} />
                <Route path="order_history" element={<Order_History />} />
                <Route path="setting" element={<Profile_Index />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

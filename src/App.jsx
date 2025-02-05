import { BrowserRouter, Route, Routes } from "react-router";
import UserAccount from "./userAccount/UserAccount";
import SignIn from "./userAccount/signIn/SignIn";
import SignUp from "./userAccount/signUp/SignUp";
import { useState } from "react";
import ForgetPassword from "./userAccount/signIn/ForgetPassword";
import ResetPassword from "./userAccount/signIn/ResetPassword";
import Index from "./shop_page/Index";
import Navigation from "./shop_page/navigation/Navigation";
import Index_Footer from "./shop_page/footer/Index_Footer";
import Product_Index from "./product_page/Product_Index";

function App() {
  const [isForget, setIsForget] = useState(false);
  console.log(isForget);

  function handleIsForget() {
    setIsForget((prevstate) => !prevstate);
  }
  return (
    <BrowserRouter>
      <Navigation />
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
        <Route path="/shop_page" element={<Index />} />
        <Route path="/product_page" element={<Product_Index />} />
      </Routes>
      <Index_Footer />
    </BrowserRouter>
  );
}

export default App;

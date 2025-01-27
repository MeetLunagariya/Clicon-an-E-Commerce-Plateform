import { BrowserRouter,  Route, Routes } from "react-router";
import UserAccount from "./userAccount/UserAccount";
import SignIn from "./userAccount/signIn/SignIn";
import SignUp from "./userAccount/signUp/SignUp";
import { useState } from "react";
import ForgetPassword from "./userAccount/signIn/ForgetPassword";
import ResetPassword from "./userAccount/signIn/ResetPassword";

function App() {
  const [isForget, setIsForget] = useState(false);
  console.log(isForget);

  function handleIsForget() {
    setIsForget((prevstate) => !prevstate);
  }
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

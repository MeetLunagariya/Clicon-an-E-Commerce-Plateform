
import Index_Footer from "../footer/Index_Footer";
import { Outlet } from "react-router";
import Navigation from "../navigation/Navigation";
const Home = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Index_Footer />
    </>
  );
};

export default Home;

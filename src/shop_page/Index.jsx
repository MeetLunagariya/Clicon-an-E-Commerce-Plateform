import Index_Footer from "./footer/Index_Footer";
import Navigation from "./navigation/Navigation";
import Product_Index from "./prduct_list/Product_Index";

const Index = () => {
  return (
    <div className="">
      <Navigation />
      <Product_Index/>
      <Index_Footer/>
    </div>
  );
};

export default Index;

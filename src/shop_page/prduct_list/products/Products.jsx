import Filter_Bar from "./Filter_Bar";
import Footer from "./Footer";
import Product_Area from "./Product_Area";
import Search_Bar from "./Search_Bar";

const Products = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Search_Bar />
      <Filter_Bar/>
      <Product_Area/>
      <Footer/>
    </div>
  );
};

export default Products;

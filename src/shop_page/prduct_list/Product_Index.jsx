import Sidebar from "./sidebar/Sidebar";
import Products from "./products/Products";

const Product_Index = () => {
  return (
    <div className="container mx-auto flex pt-[40px] pb-[72px] gap-6">
      <Sidebar />
      <Products />
    </div>
  );
};

export default Product_Index;

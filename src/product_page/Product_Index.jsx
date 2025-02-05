import Product_Image from "./Product_Image";

const Product_Index = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 pt-8 pb-20 flex gap-14">
        <Product_Image />
        <div>selection section</div>
      </div>
    </div>
  );
};

export default Product_Index;

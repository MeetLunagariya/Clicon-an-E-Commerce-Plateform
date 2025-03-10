/* eslint-disable react/prop-types */
import  { useState } from "react";
import Product_Item from "./Product_Item";

const Product = ({ product, badge_value }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <div
        className="border rounded-sm border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
        onMouseEnter={() => setActiveCard(product.fields.id.integerValue)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <Product_Item activeCard={activeCard} product={product} badge_value={badge_value}/>
      </div>
    </>
  );
};

export default Product;

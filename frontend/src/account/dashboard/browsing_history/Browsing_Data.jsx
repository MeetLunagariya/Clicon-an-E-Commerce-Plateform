/* eslint-disable react/prop-types */
import { useState } from "react";
import Product_Item from "../../../shop_page/prduct_list/products/Product_Item";
import { badge_value } from "../../../shop_page/prduct_list/products/productData";

const Browsing_Data = ({ product, index }) => {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div
      className={`rounded-sm ${
        (index + 1) % 4 !== 0 && "border-r" 
      } border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]`}
      onMouseEnter={() => setActiveCard(product.id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      <Product_Item
        activeCard={activeCard}
        product={product}
        badge_value={product.badge_id ? badge_value[product.badge_id] : null}
      />
    </div>
  );
};

export default Browsing_Data;

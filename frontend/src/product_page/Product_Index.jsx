import { useParams } from "react-router";
import Bottom_Section from "./Bottom_Section";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import {
  products,
  badge_value,
} from "../shop_page/prduct_list/products/productData";
const Product_Index = () => {
  const { id } = useParams();
  // console.log("id", id);

  const product = products.find((data) => data.id == id);
  // console.log("product", product);

  return (
    <div className="container ">
      <div className="">
        <TopSection
          id={id}
          product={product}
          badge_value={product.badge_id ? badge_value[product.badge_id] : null}
        />
        <MiddleSection />
        <Bottom_Section />
      </div>
    </div>
  );
};

export default Product_Index;

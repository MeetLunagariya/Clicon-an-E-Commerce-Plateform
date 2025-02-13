import Product from "./Product";
import {products,badge_value} from "./productData";

const Product_Area = ({start_end}) => {
  // console.log("pagestart : "+start_end.start+" pageend : "+start_end.end)
  return (
    <div>
      <ul className="grid grid-cols-4 gap-4 flex-wrap">
        {products.slice(start_end.start,start_end.end).map((product) => (
          <>
            <li key={product.id}>
              <Product
                product={product}
                key={product.id}
                badge_value={
                  product.badge_id ? badge_value[product.badge_id] : null
                } 
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Product_Area;

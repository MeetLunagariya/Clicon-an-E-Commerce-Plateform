import Product from "./Product";
import { badge_value, products } from "./productData";

const ProductList = ({ start_end }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {products.slice(start_end.start, start_end.end).map((product) => (
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

// Notification Component (defined in the same file for simplicity)

export default ProductList;

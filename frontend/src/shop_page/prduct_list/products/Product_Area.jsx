import Product from "./Product";
import { products } from "./productData";

const ProductList = () => {

  return (
    <div>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {/* Render your products */}
        {products.map((product) => (
          <li key={product.id}>
            <Product
              key={product.id}
              product={product}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Notification Component (defined in the same file for simplicity)

export default ProductList;

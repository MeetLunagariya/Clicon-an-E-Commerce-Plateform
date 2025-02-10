import Title from "./Title";
import Product_Card from "./Product_Card";
import { suggested_products } from "./Data";

const Bottom_Section = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {suggested_products.map((product) => (
        <>
          <section className="flex flex-col gap-4">
            <Title title={product?.title} />
            <ul className=" flex flex-col gap-4">
              {product.data.map((data) => (
                <>
                  <li key={data.title}>
                    <Product_Card product={data} />
                  </li>
                </>
              ))}
            </ul>
          </section>
        </>
      ))}
    </section>
  );
};

export default Bottom_Section;

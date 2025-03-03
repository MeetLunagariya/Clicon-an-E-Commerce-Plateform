/* eslint-disable react/prop-types */
import { getDatabase, onValue, ref, set } from "firebase/database";
import Product from "./Product";
import { badge_value, products } from "./productData";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const ProductList = ({ start_end, PAGE_SIZE }) => {
  const [product, setProduct] = useState([]);

  // To Update data into Firebase Realtime Database

  // const db = getDatabase();
  // async function writeProductsToDatabase() {
  //   try {
  //     for (const product of products) {
  //       const productRef = ref(db, `products/${product.id}`);
  //       // console.log('productRef', productRef);
  //       await set(productRef, product);
  //       // console.log(`Product ${product.id} written to database.`);
  //     }
  //     console.log("All products written successfully!");
  //   } catch (error) {
  //     console.error("Error writing products to database:", error);
  //   }
  // }

  // useEffect(() => {
  //   writeProductsToDatabase();
  // }, []);

  // To Fetch data from Firebase Realtime Database

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, "products"); //  Replace 'products' with your actual path

    onValue(
      productsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProduct(data);
          console.log("Data fetched:", data); // Process the 'data' here
        } else {
          console.log("No data found at this location.");
        }
      },
      {
        onlyOnce: false, // Optional: Set to true to fetch data only once
      }
    );
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {product.length > 0
          ? product.slice(start_end.start, start_end.end + 1).map((product) => (
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
            ))
          : Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <Skeleton key={index} />
            ))}
      </ul>
    </div>
  );
};

export default ProductList;

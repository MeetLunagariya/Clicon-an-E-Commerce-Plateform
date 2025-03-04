/* eslint-disable react/prop-types */
import { getDatabase, onValue, ref, set } from "firebase/database";
import Product from "./Product";
import { badge_value, products } from "./productData";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../config/firebase";

const ProductList = ({ start_end, PAGE_SIZE }) => {
  const [product, setProduct] = useState([]);

  
  // To Fetch data from Firebase Realtime Database
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setProduct(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        // displayErrorMessage("Failed to load products. Please try again later.");
      }
    }
    fetchProducts();
  }, []);

  // To Update data into Firebase Realtime Database

  // const productsCollectionRef = collection(db, "products");
  // useEffect(() => {
  //   async function addProductsToFirestore(products) {
  //     try {
  //       for (const product of products) {
  //         await addDoc(productsCollectionRef, product);
  //       }
  //       console.log("Products added successfully!");
  //     } catch (error) {
  //       console.error("Error adding products:", error.message);
  //     }
  //   }
  //   addProductsToFirestore(products);
  // }, []);

  return (
    <div>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {product.length > 0
          ? product.slice(start_end.start, start_end.end).map((product) => (
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

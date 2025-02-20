import React, { useEffect, useState } from "react";
import Product from "./Product";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { products } from "./productData";

const ProductList = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a notification
  const addNotification = (message) => {
    const newNotification = {
      id: Math.random(),
      text: message,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div>
      <ul className="grid grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {/* Render your products */}
        {products.map((product) => (
          <li key={product.id}>
            <Product
              key={product.id}
              product={product}
              addNotification={addNotification}
            />
          </li>
        ))}
      </ul>
      {/* Notification Container */}
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              id={notification.id}
              text={notification.text}
              removeNotif={removeNotification}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Notification Component (defined in the same file for simplicity)
const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeNotif(id);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-[#FA8232] pointer-events-auto"
    >
      <FiCheckSquare className="mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default ProductList;

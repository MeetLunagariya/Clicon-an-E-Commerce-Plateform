import React, { useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { removeNotification } from "../Store/notificationSlice";
import { useDispatch } from "react-redux";
const Notification = ({ text, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeNotification(id));
    }, 5000);
    return () => clearTimeout(timeout);
  }, [id, removeNotification]);

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
      <button
        onClick={() => dispatch(removeNotification(id))}
        className="ml-auto mt-0.5"
      >
        <FiX />
      </button>
    </motion.div>
  );
};
export default Notification;

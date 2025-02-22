import React from "react";

const Order = ({ order }) => {
  return (
    <li
      key={order.id}
      className={`flex gap-4 p-4 rounded-sm`}
      style={{ backgroundColor: order.bg }}
    >
      <div className="p-3 rounded-sm bg-white">{order.svg}</div>
      <div className="flex flex-col gap-1 ">
        <span className="text-xl text-gray-900 font-semibold">
          {order.count}
        </span>
        <span className="text-gray-700 text-sm">{order.title}</span>
      </div>
    </li>
  );
};

export default Order;

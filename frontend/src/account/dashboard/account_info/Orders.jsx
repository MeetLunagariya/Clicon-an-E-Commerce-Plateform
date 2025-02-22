import React from "react";
import order_details from "./Data";
import Order from "./Order";

const Orders = () => {
  return (
    <section >
      <ul className="flex lg:flex-col gap-6">
        {order_details.map((order) => (
          <>
              <Order order={order} key={order.id} />
          </>
        ))}
      </ul>
    </section>
  );
};

export default Orders;

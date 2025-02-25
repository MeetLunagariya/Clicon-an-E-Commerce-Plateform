import { useSelector } from "react-redux";
import Title_Bar from "../payment_option/Title_Bar";
import Order from "./Order";

const Recent_Index = () => {
  const { orders, total_orders } = useSelector((state) => state.order);
  // console.log("total_orders", total_orders);
  // console.log("orders", orders);
  return (
    <section className="col-span-2 row-span-2 border border-gray-200 rounded-sm">
      <Title_Bar
        btn_title={"View All"}
        title={"recent orders"}
        key={"recent_orders"}
      />

      {total_orders >= 1 ? (
        <>
          <div className="uppercase font-medium bg-gray-50  border-t border-b border-gray-200 text-xs font-sans text-gray-700 px-6 py-2.5 grid grid-cols-7">
            <span>order id</span>
            <span>status</span>
            <span className="col-span-2">date</span>
            <span className="col-span-2">total</span>
            <span className="">action</span>
          </div>
          <div className="px-6 py-3 flex flex-col gap-2">
            {orders.map((item) => (
              <Order key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-gray-400 font-medium p-6 border-t border-gray-100 ">
          No Recent Orders
        </div>
      )}
    </section>
  );
};

export default Recent_Index;

import React from "react";
import Title from "../product_page/Title";
import { useSelector } from "react-redux";
import FormButton from "../ui components/FormButton";

const Card_Totals = () => {
  const items = useSelector((state) => state.cart.items);
  const sub_total = items.reduce((total, item) => total + item.price, 0);
  const data = [
    { title: "Sub-total", price: sub_total },
    { title: "Shipping", price: null },
    { title: "Discount", price: 24 },
    { title: "Tax", price: 61.99 },
  ];
  const totalPrice = data.reduce((total, item) => total + item.price, 0);

  return (
    <section className="px-6 border border-gray-100 rounded-sm">
      <div className="flex justify-start items-center py-5">
        <Title title={"Card Totals"} />
      </div>

      <section className="">
        <div className="text-sm flex flex-col gap-3 border-b border-gray-100 pb-5 ">
          {data.map((value) => (
            <>
              <div className="flex justify-between">
                <span className="text-gray-600">{value.title}</span>
                <span className="font-medium">
                  {value.title === "Shipping" && value.price === null
                    ? "Free"
                    : "$" + value.price}
                </span>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-between text-lg pt-3">
          <span className="text-gray-600">Total</span>
          <span className="font-medium">
           ${totalPrice} USD
          </span>
        </div>
        <FormButton title="proceed to checkout" />
      </section>
    </section>
  );
};

export default Card_Totals;

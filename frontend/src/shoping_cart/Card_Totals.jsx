import Title from "../product_page/Title";
import { useSelector } from "react-redux";
import FormButton from "../ui components/FormButton";
import { useNavigate } from "react-router";

const Card_Totals = ({ title, ...props }) => {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  // console.log("Items in cart:", totalQuantity);

  const sub_total = items.reduce(
    (total, item) =>
      total +
      (item.badge_id === 4 ? item.disc_price : item.price) * item.quantity,
    0
  );
  // console.log("Subtotal:", sub_total);

  const data = [
    { title: "Sub-total", price: sub_total },
    { title: "Shipping", price: 0 },
    { title: "Discount", price: 24 },
    { title: "Tax", price: 61.99 },
  ];

  const totalPrice = data.reduce((total, item) => total + item.price, 0);
  // console.log("Total Price:", totalPrice);

  return (
    <>
      <section className=" rounded-sm ">
        <div className="flex justify-start items-center py-5 ">
          <Title title={"Card Totals"} />
        </div>
        {totalQuantity >= 1 ? (
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
              <span className="font-medium">${totalPrice} USD</span>
            </div>
            <FormButton title={title} {...props} />
          </section>
        ) : (
          <section className="py-5 font-medium text-gray-400">
            {" "}
            No Items In cart
          </section>
        )}
      </section>
    </>
  );
};

export default Card_Totals;

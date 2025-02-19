import Title from "../../product_page/Title";
import { useSelector } from "react-redux";
import Card_Totals from "../../shoping_cart/Card_Totals";

const Order_Summary = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <section className="border border-gray-200 rounded-sm px-4 py-2 self-start">
      <div>
        <Title title={"Order Summary"} />
      </div>
      <ul className="flex flex-col">
        {items?.map((item) => (
          <>
            <li key={item.id}>
              <div className="p-3 flex gap-3 rounded-sm">
                <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]">
                  <img
                    src={item?.image}
                    alt={item?.description}
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal line-clamp-2">
                    {item?.description}
                  </div>
                  <div className="font-semibold  ">
                    <span className="text text-gray-600">
                      {item?.quantity} x
                    </span>
                    <span className="text-[#2DA5F3]"> ${item?.price}</span>
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
      <Card_Totals title={"place order"} type="submit" />
    </section>
  );
};

export default Order_Summary;

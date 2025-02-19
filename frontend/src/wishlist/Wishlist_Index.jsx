import React from "react";
import { useSelector } from "react-redux";
import Title from "../product_page/Title";
import Item from "./Item";
import { useNavigate } from "react-router";

const Wishlist_Index = () => {
  const { total_wished_items, wished_items } = useSelector(
    (state) => state.WishList
  );
  const navigate = useNavigate()
  return (
    <div className="container py-10">
      <section className="col-span-2 mx-4 row-span-2 border border-gray-100 rounded-sm self-start">
        <div className="flex justify-start items-center px-6 py-5">
          <Title title={"Wishlist"} />
        </div>

        {total_wished_items >= 1 ? (
          <>
            <div className="uppercase font-medium bg-gray-50  border-t border-b border-gray-100 text-xs font-sans text-gray-700 px-6 py-2.5 grid grid-cols-7 gap-6">
              <span className="col-span-3">products</span>
              <span>price</span>
              <span>stock status</span>
              <span  className="col-span-2">actions</span>
            </div>
            <div className="p-6 flex flex-col gap-2">
              {wished_items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-400 font-medium p-6 border-t border-gray-100 ">
            No Items In Wishlist
          </div>
        )}

        <div className="p-6 border-t border-gray-100">
          <button
            className="flex px-6 gap-2 rounded-sm border-2 border-[#2DA5F3] py-3 items-center"
            onClick={() => navigate("../shop_page")}
          >
            <span>{/* <ArrowLeft_Cart /> */}</span>
            <span className="uppercase text-[#2DA5F3] text-sm font-medium">
              return to shop
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Wishlist_Index;

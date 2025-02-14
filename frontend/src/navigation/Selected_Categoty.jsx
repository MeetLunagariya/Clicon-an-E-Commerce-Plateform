import React from "react";
import { companies } from "./data";
import SubCategory from "./SubCategory";
import { suggested_products } from "../product_page/Data";
import Title from "../product_page/Title";
import Product_Card from "../product_page/Product_Card";
import { category_discount } from "../assets/img";
import { RightArrow } from "../assets/svg";

const Selected_Categoty = ({ selected }) => {
  return (
    <>
      {selected === "SmartPhone" && (
        <div className="absolute left-full rounded-sm z-10 border p-5 border-slate-200 bg-white shadow-lg top-0 ml-3 flex gap-5">
          <section>
            <ul
              role="menu"
              data-popover="nested-menu"
              data-popover-offset="20"
              data-popover-placement="right-start"
              className=" min-w-[164px] overflow-auto text-sm focus:outline-none "
            >
              {companies.map((company) => (
                <>
                  <SubCategory sub_title={company} />
                </>
              ))}
            </ul>
          </section>
          <section className="min-w-[321px]">
            {suggested_products.map(
              (product) =>
                product.title === "FEATURED PRODUCTS" && (
                  <>
                    <section className="flex flex-col gap-4">
                      <Title title={"FEATURED PHONES"} />
                      <ul className=" flex flex-col gap-4">
                        {product.data.map((data) => (
                          <>
                            <li
                              key={data.title}
                              // onClick={() =>
                              //   navigate(`../product_page/${product.id}`)
                              // }
                            >
                              <Product_Card product={data} />
                            </li>
                          </>
                        ))}
                      </ul>
                    </section>
                  </>
                )
            )}
          </section>
          <section className="min-w-[312px] bg-[#F7E99E] flex flex-col p-8 gap-6 rounded-sm">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="min-h-[96px]">
                <img src={category_discount} alt="" />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col gap-2 justify-center">
                  <span className="text-gray-900 text-2xl font-bold text-center">
                    21% Discount
                  </span>
                  <span className="font-medium text-gray-700 text-center font-sans">
                    <p>
                      Escape the noise, It’s time to hear the magic with Xiaomi
                      Earbuds.
                    </p>
                  </span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <span className="text-gray-700 text-sm">Starting price:</span>
                  <span className="">
                    <button className="py-1.5 px-3 bg-white text-gray-900 rounded-sm">
                      $99 USD
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#FA8232] font-semibold rounded-sm h-[48px] flex justify-center items-center">
              <button className="text-white flex gap-2 uppercase text-sm ">
                <span>Shop now</span>
                <span>
                  <RightArrow />
                </span>
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Selected_Categoty;

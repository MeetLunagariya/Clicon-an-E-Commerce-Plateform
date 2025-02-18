import React, { useEffect } from "react";
import { Rating } from "@mui/material";
import Product_Image from "./Product_Image";
import FormSection from "./FormSection";
import WishList from "./WishList";
import {
  ArrowsClockwise,
  Copy,
  Facebook_product_page,
  Heart_Productpage,
  Pinterest_product_page,
  Twitter_product_page,
} from "../assets/svg";
import { Payment_Method } from "../assets/img";

const TopSection = ({ product, badge_value }) => {
  useEffect(() => {
    const element = document.getElementById("target-section");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className=" pt-8 flex flex-col xl:flex-row gap-14" id="target-section">
      {/* Product Image section */}
      <Product_Image img={product.image} />

      {/* Product Details  */}
      <div className="flex flex-col">
        <section className="flex flex-col gap-4 border-b border-[#E4E7E9]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1.5 ">
              <Rating value={product.star_value} readOnly />
              <span className="text-[#191C1F] text-sm font-medium my-auto">
                4.7 Star Rating
              </span>
              <span className="text-[#5F6C72] text-sm my-auto">
                ({product.review_count} User feedback)
              </span>
            </div>
            <div className="">
              <p className="text-xl text-[#191C1F]">{product.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm">
              <span className=" text-[#5F6C72]">Sku: </span>
              <span className="font-medium">A264671</span>
            </div>
            <div className="text-sm">
              <span className=" text-[#5F6C72]">Availability: </span>
              <span className="font-medium text-[#2DB224]">In Stock</span>
            </div>
            <div className="text-sm">
              <span className=" text-[#5F6C72]">Brand: </span>
              <span className="font-medium">Apple</span>
            </div>
            <div className="text-sm">
              <span className=" text-[#5F6C72]">Category: </span>
              <span className="font-medium">Electronics Devices</span>
            </div>
          </div>
          <div className="flex gap-2 my-5">
            {badge_value?.val === "discount" ? (
              <>
                <span className="text-[#2DA5F3] font-medium text-2xl my-auto">
                  ${product.disc_price}
                </span>
                <span className="text-[#77878F] line-through my-auto">
                  ${product.price}
                </span>
                <span className="bg-[#EFD33D] py-[5px] px-2.5 rounded-sm font-medium uppercase">
                  {product.disc_percentage}% off
                </span>
              </>
            ) : (
              <span className="text-[#2DA5F3] font-medium text-2xl my-auto">
                ${product.price}
              </span>
            )}
          </div>
        </section>

        <FormSection product={product} />

        <div className="flex justify-between pb-2 my-2">
          <div className="flex gap-6">
            <WishList icon={<Heart_Productpage />} title={"Add to Wishlist"} />
            <WishList icon={<ArrowsClockwise />} title={"Add to Compare"} />
          </div>
          <div className="flex gap-3">
            <span className="text-[#475156]">Share product:</span>
            <span>
              <ul className="flex gap-3 items-center">
                <li>
                  <Copy />
                </li>
                <li>
                  <Facebook_product_page />
                </li>
                <li>
                  <Twitter_product_page />
                </li>
                <li>
                  <Pinterest_product_page />
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="flex flex-col p-5 gap-3 border border-[#E4E7E9] rounded-sm mt-3">
          <span>100% Guarantee Safe Checkout</span>
          <span className="max-w-[312px]">
            <img src={Payment_Method} alt="Payment Methods" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

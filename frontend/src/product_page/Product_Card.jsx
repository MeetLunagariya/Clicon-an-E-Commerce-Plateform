import React from "react";

const Product_Card = ({product}) => {
  return (
    <div className="p-3 flex gap-3 border border-gray-100 rounded-sm">
      <div className="min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px]">
        <img src={product.img} alt={product.title}  className="h-full w-full"/>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-normal line-clamp-2">{product.title}</span>
        <span className="font-semibold text-[#2DA5F3] ">${product.price}</span>
      </div>
    </div>
  );
};

export default Product_Card;

/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";

const Product = ({ product, badge_value }) => {
  let value = "";
  let color = "";

  if (badge_value) {
    value = badge_value.val;
    color = badge_value.color;
  }

  return (
    <div className="border rounded-sm border-[#E4E7E9] p-4 hover:shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]">
      <div className="relative mx-auto w-[fit-content]">
        <div>
          <img src={product.image} alt="Image of Phone" />
        </div>
        <div>
          
        </div>
        {badge_value && (
          <div
            className={`absolute top-0 left-0  text-[#FFFFFF] py-[5px] px-[10px] rounded-sm gap-[10px] uppercase`}
            style={{ backgroundColor: color }}
          >
            <span>{value}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[8px] justify-start overflow-hidden text-sm">
        <div className="flex gap-1 ">
          <span className="h-[16px]">
            <Rating value={product.star_value} readOnly />
          </span>
          <span className="text-[#77878F]">({product.review_count})</span>
        </div>
        <div className="text-[#191C1F] font-semibold ">
          {product.description}
        </div>
        <div className="text-[#2DA5F3] font-semibold">${product.price}</div>
      </div>
    </div>
  );
};

export default Product;

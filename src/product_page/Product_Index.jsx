import { Rating } from "@mui/material";
import Product_Image from "./Product_Image";
import FormSection from "./FormSection";

const Product_Index = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 pt-8 pb-20 flex gap-14">
        {/* Product Image section */}
        <Product_Image />

        {/* Product Details  */}
        <div className="flex flex-col">
          <section className="flex flex-col gap-4 border-b border-[#E4E7E9]">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1.5 ">
                <Rating value={5} readOnly />
                <span className="text-[#191C1F] text-sm font-medium my-auto">
                  4.7 Star Rating
                </span>
                <span className="text-[#5F6C72] text-sm my-auto">
                  (21,671 User feedback)
                </span>
              </div>
              <div className="w-[648px]">
                <p className="text-xl text-[#191C1F]">
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                  256GB SSD Storage) - Space Gray
                </p>
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
              <span className="text-[#2DA5F3] font-medium text-2xl my-auto">
                $1699
              </span>
              <span className="text-[#77878F] line-through my-auto">
                $1999.00
              </span>
              <span className="bg-[#EFD33D] py-[5px] px-2.5 rounded-sm font-medium uppercase">
                21% off
              </span>
            </div>
          </section>
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default Product_Index;

import React, { useEffect } from "react";
import { CheckCircle } from "../assets/img";
import { Stack } from "../assets/svg";
import FormButton from "../ui components/FormButton";
import { useNavigate } from "react-router";
import { emptyCart } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Successful = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { items } = useSelector((state) => state.cart);

  // to Clear a cart
  useEffect(() => {
    dispatch(emptyCart());
    // console.log("items", items);
  }, []);
    
  
  return (
    <div className="flex flex-col text-center justify-center items-center gap-5">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="max-h-[88px] max-w-[88px]">
          <img src={CheckCircle} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-wrap max-w-[424px]">
          <p className="font-semibold text-lg">
            Your order is successfully place
          </p>
          <p className="text-[#5F6C72] text-sm line-clamp-2">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </p>
        </div>
      </div>

      <div className="flex gap-3 w-full">
        <button
          className="flex gap-2 items-center border-2 px-6 my-4 border-[#FFE7D6] rounded-sm"
          onClick={() => navigate("../shop_page")}
        >
          <span>
            <Stack />
          </span>
          <span className="uppercase text-[#FA8232] font-bold text-nowrap">
            Go to Dashboard
          </span>
        </button>
        <FormButton title={"view order"} />
      </div>
    </div>
  );
};

export default Successful;

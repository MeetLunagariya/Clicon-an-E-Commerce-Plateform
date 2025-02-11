
import Card_Totals from "./Card_Totals";
import Coupon_Code from "./Coupon_Code";
import Shopping_Card from "./Shopping_Card";

const Cart = () => {
 
  return (
    <div className="container mx-auto">
      <section className="my-14 px-4 grid grid-cols-3 gap-4">
        <Shopping_Card/>
        <Card_Totals/>
        <Coupon_Code/>
      </section>
    </div>
  );
};

export default Cart;

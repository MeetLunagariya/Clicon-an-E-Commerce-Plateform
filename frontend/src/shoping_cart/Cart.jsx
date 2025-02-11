
import Card_Totals from "./Card_Totals";
import Shopping_Card from "./Shopping_Card";

const Cart = () => {
 
  return (
    <div className="container mx-auto">
      <section className="my-14 px-4 grid grid-cols-3 gap-4">
        <Shopping_Card/>
        <Card_Totals/>
        <section className="py-6">Coupon Code</section>
      </section>
    </div>
  );
};

export default Cart;


import Shopping_Card from "./Shopping_Card";

const Cart = () => {
 
  return (
    <div className="container mx-auto">
      <section className="my-14 px-4 grid grid-cols-3">
        <Shopping_Card/>
        <section className="py-6">Card Totals</section>
        <section className="py-6">Coupon Code</section>
      </section>
    </div>
  );
};

export default Cart;

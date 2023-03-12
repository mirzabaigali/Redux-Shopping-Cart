import { useSelector } from "react-redux";
import { CartCard } from "../components";
export const Cart = () => {
  const products = useSelector((state) => state.cartSate.cartList);
  const total = useSelector((state) => state.cartSate.total);
  return (
    <main>
      <section className="cart">
        <h1>
          Cart : {products.length}/ ${total}
        </h1>
        {products.map((item) => {
          return <CartCard key={item.id} product={item} />;
        })}
      </section>
    </main>
  );
};

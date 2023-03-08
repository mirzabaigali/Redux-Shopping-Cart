import { useTitle } from "../customHooks/useTitle";
import "./CartCard.css";
export const CartCard = ({ product }) => {
  useTitle("Cart");
  let { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <button>Remove</button>
    </div>
  );
};

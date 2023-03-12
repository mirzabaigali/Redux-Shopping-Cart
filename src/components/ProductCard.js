import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const [button, setButton] = useState(false);
  const products = useSelector((state) => state.cartSate.cartList);

  useEffect(() => {
    const isCard = products.find((item) => item.id === product.id);
    // const isCard = false;
    if (isCard) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [ product.id,products]);
  const dispatch = useDispatch();
  let { name, image, price } = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p className="price">${price}</p>
        {button ? (
          <button
            onClick={() => dispatch(remove(product))}
            style={{ backgroundColor: "crimson" }}
          >
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

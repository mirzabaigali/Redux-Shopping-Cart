import "./ProductCard.css";
export const ProductCard = ({ name, price, image }) => {
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p className="price">${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/logo192.png";
import "./Header.css";

export const Header = () => {
  const products = useSelector((state) => state.cartSate.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>REDUX CART</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>cart:{products.length}</span>
      </Link>
    </header>
  );
};

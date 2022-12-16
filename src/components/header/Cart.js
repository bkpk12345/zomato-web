import "./Cart.css";
import CartIcon from "./CartIcon";
const HeaderCart = () => {
  return (
    <div className="main-cart">
      <div className="cart-label">Your Cart</div>
      <CartIcon />
    </div>
  );
};

export default HeaderCart;

import HeaderCart from "./Cart";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Zomato</h1>
      <HeaderCart />
    </div>
  );
};

export default Header;

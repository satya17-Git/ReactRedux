import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopEasy</div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { navigationItems } from "../../routes/const";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        {navigationItems.map((item) => (
          <Link to={item.route} key={item.route}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

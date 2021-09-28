import Month from "../Month";
import Arrow from "../Arrow";
import "./style.scss";

const Header = () => {
  return (
    <header className="header-calendar">
      <Arrow />
      <Month />
      <Arrow />
    </header>
  );
};

export default Header;

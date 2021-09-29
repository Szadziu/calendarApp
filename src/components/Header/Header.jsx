import { useEffect } from "react";
import Arrow from "../Arrow";
import "./style.scss";

const Header = ({ currentMonth, monthsOfYear, setNewMonth, fetchMonth }) => {
  useEffect(() => fetchMonth(), [currentMonth]);

  return (
    <header className="header-calendar">
      <h1>{monthsOfYear[currentMonth]}</h1>
      <Arrow currentMonth={currentMonth} setNewMonth={setNewMonth} />
    </header>
  );
};

export default Header;

import { useEffect } from "react";
import Arrow from "../Arrow";
import "./style.scss";

const Header = ({
  currentMonth,
  currentYear,
  monthsOfYear,
  setNewMonth,
  setNewYear,
  fetchMonth,
}) => {
  useEffect(() => fetchMonth(), [currentMonth]);

  return (
    <header className="header-calendar">
      <h1>{`${monthsOfYear[currentMonth]} ${currentYear}`}</h1>
      <Arrow
        currentMonth={currentMonth}
        currentYear={currentYear}
        setNewYear={setNewYear}
        setNewMonth={setNewMonth}
      />
    </header>
  );
};

export default Header;

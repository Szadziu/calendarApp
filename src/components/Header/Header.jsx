import { useEffect, useState } from "react";

import Arrow from "../Arrow";

import { MONTHS_OF_YEAR } from "../../utils/utils";

import "./style.scss";

const Header = ({ fetchMonth }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => fetchMonth(currentMonth, currentYear), [currentMonth]);

  return (
    <header className="header-calendar">
      <h1>{`${MONTHS_OF_YEAR[currentMonth]} ${currentYear}`}</h1>
      <Arrow
        currentMonth={currentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
        setCurrentMonth={setCurrentMonth}
      />
    </header>
  );
};

export default Header;

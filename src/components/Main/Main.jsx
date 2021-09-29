import Calendar from "../Calendar/Calendar";
import Header from "../Header";

import "./style.scss";

const Main = ({
  actuallyMonth,
  set,
  currentMonth,
  currentYear,
  monthsOfYear,
  setNewMonth,
  setNewYear,
  fetchMonth,
}) => {
  return (
    <div className="main-container">
      <Header
        currentMonth={currentMonth}
        currentYear={currentYear}
        monthsOfYear={monthsOfYear}
        setNewMonth={setNewMonth}
        setNewYear={setNewYear}
        fetchMonth={fetchMonth}
      />
      <Calendar set={set} actuallyMonth={actuallyMonth} />
    </div>
  );
};

export default Main;

import Calendar from "../Calendar/Calendar";
import Header from "../Header";

import "./style.scss";

const Main = ({
  actuallyMonth,
  set,
  currentMonth,
  monthsOfYear,
  setNewMonth,
  fetchMonth,
}) => {
  return (
    <div className="main-container">
      <Header
        currentMonth={currentMonth}
        monthsOfYear={monthsOfYear}
        setNewMonth={setNewMonth}
        fetchMonth={fetchMonth}
      />
      <Calendar set={set} actuallyMonth={actuallyMonth} />
    </div>
  );
};

export default Main;

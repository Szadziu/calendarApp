import Day from "../Day";

import "./style.scss";

const Calendar = ({ actuallyMonth, set }) => {
  const renderDays = actuallyMonth.map((day) => (
    <Day
      actuallyMonth={actuallyMonth}
      key={day.dayId}
      id={day.dayId}
      day={day}
      set={set}
    />
  ));

  return <>{<div className="main-calendar">{renderDays}</div>}</>;
};

export default Calendar;

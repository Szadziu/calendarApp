import Day from "../Day";

import "./style.scss";

const Calendar = ({ actuallyMonth }) => {
  const renderDays = actuallyMonth.map((day) => (
    <Day key={day.dayId} id={day.dayId} day={day} />
  ));

  return <>{<div className="main-calendar">{renderDays}</div>}</>;
};

export default Calendar;

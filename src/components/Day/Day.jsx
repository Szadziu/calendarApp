import { useState } from "react";
import Modal from "../Modal";
import { DAYS_OF_WEEK } from "../../utils/utils";
import "./style.scss";

const Day = ({ day, fetchMonth }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const currentDateOfDay = {
    actuallyDay: day.date.slice(0, 2).replace("-", "") * 1 - 1,
    actuallyMonth:
      day.date.slice(-7, -4).replace("-", "").replace("-", "") * 1 - 1,
    actuallyYear: day.date.slice(-4),
  };
  const { actuallyDay, actuallyMonth, actuallyYear } = currentDateOfDay;
  const actuallyDate = `${actuallyDay}/${actuallyMonth}/${actuallyYear}`;
  const indexDayOfWeek =
    new Date(actuallyYear, actuallyMonth, actuallyDay).getDay() + 1;
  const isEventOnDay = day.events.length && "isEventOn";
  const isSundayDay = indexDayOfWeek === 7 ? "isSundayDay" : "isDayOfWeek";
  return (
    <div
      className="day-calendar"
      onClick={() => {
        setIsShowModal(true);
      }}
    >
      <p className="number-day-calendar">
        {day.date.slice(0, 2).replace("-", "")}
      </p>
      <p className={isSundayDay}>{DAYS_OF_WEEK[indexDayOfWeek]}</p>
      <p className={isEventOnDay}>Wydarzenia: {day.events.length}</p>
      {isShowModal && (
        <Modal
          fetchMonth={fetchMonth}
          actuallyMonth={actuallyMonth}
          actuallyYear={actuallyYear}
          actuallyDate={actuallyDate}
          isDisplay={setIsShowModal}
          day={day}
        />
      )}
    </div>
  );
};

export default Day;

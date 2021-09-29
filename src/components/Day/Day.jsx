import { useState } from "react";

import Modal from "../Modal";

import { DAYS_OF_WEEK } from "../../utils/utils";

import "./style.scss";

const Day = ({ id, day }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const currentDateOfDay = {
    actuallyDay: day.date.slice(0, 2).replace("-", "") * 1 - 1,
    actuallyMonth:
      day.date.slice(-7, -4).replace("-", "").replace("-", "") * 1 - 1,
    actuallyYear: day.date.slice(-4),
  };
  const actuallyDate = `${currentDateOfDay.actuallyDay}/${currentDateOfDay.actuallyMonth}/${currentDateOfDay.actuallyYear}`;
  const { actuallyDay, actuallyMonth, actuallyYear } = currentDateOfDay;
  const indexDayOfWeek =
    new Date(actuallyYear, actuallyMonth, actuallyDay).getDay() + 1;
  const isEventOnDay = day.events.length && "isEventOn";
  const isSundayDay = indexDayOfWeek === 7 && "isSundayDay";
  return (
    <div
      className="day-calendar"
      onClick={() => {
        setIsShowModal(true);
      }}
    >
      <p className="">{day.date.slice(0, 2).replace("-", "")}</p>
      <p className={isSundayDay}>{DAYS_OF_WEEK[indexDayOfWeek]}</p>
      <p className={isEventOnDay}>Events: {day.events.length}</p>
      {isShowModal && (
        <Modal
          actuallyMonth={actuallyMonth}
          actuallyDate={actuallyDate}
          isDisplay={setIsShowModal}
          day={day}
          idDay={id}
        />
      )}
    </div>
  );
};

export default Day;

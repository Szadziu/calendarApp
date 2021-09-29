import { useState } from "react";

import Modal from "../Modal";

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

  // const actuallyDay = day.date.slice(0, 2).replace("-", "") * 1 - 1;
  // const actuallyMonth =
  //   day.date.slice(-7, -4).replace("-", "").replace("-", "") * 1 - 1;

  // const actuallyYear = day.date.slice(-4);

  // const actuallyDate = `${actuallyDay}/${actuallyMonth}/${actuallyYear}`;

  const daysOfWeek = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
    "Niedziela",
  ];

  const indexDayOfWeek =
    new Date(actuallyYear, actuallyMonth, actuallyDay).getDay() + 1;

  const getDay = (color) => {
    return <p style={{ color: color }}>{daysOfWeek[indexDayOfWeek]}</p>;
  };

  return (
    <div
      className="day-calendar"
      onClick={() => {
        setIsShowModal(true);
      }}
    >
      <p>{day.date.slice(0, 2).replace("-", "")}</p>
      {indexDayOfWeek === 7 ? getDay("red") : getDay()}
      <p>Events: {day.events.length}</p>
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

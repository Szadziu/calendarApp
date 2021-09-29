import { useState } from "react";

import Modal from "../Modal";

import "./style.scss";

const Day = ({ id, day, set }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const actuallyDay = day.date.slice(0, 2).replace("-", "") * 1 - 1;

  const actuallyMonth =
    day.date.slice(-7, -4).replace("-", "").replace("-", "") * 1 - 1;

  const actuallyYear = day.date.slice(-4);

  const actuallyDate = `${actuallyDay}/${actuallyMonth}/${actuallyYear}`;

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

  return (
    <div
      className="day-calendar"
      onClick={() => {
        setIsShowModal(true);
      }}
    >
      <p>{day.date.slice(0, 2).replace("-", "")}</p>
      {indexDayOfWeek === 7 ? (
        <p style={{ color: "red" }}>{daysOfWeek[indexDayOfWeek]}</p>
      ) : (
        <p>{daysOfWeek[indexDayOfWeek]}</p>
      )}
      <p>Events: {day.events.length}</p>
      {isShowModal && (
        <Modal
          set={set}
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

import { useState } from "react";

import Modal from "../Modal";

import "./style.scss";

const Day = ({ id, day, actuallyMonth, set }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div
      className="day-calendar"
      onClick={() => {
        setIsShowModal(true);
      }}
    >
      <p>{day.date}</p>
      <p>Events: {day.events.length}</p>
      {isShowModal && (
        <Modal
          set={set}
          actuallyMonth={actuallyMonth}
          isDisplay={setIsShowModal}
          day={day}
          idDay={id}
        />
      )}
    </div>
  );
};

export default Day;

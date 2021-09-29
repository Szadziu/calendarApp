import { useEffect, useRef, useState } from "react";

import TaskList from "../TaskList";

import "./style.scss";

const Modal = ({ day, isDisplay, actuallyDate }) => {
  const modalOverlayBackground = useRef(null);

  useEffect(() => {
    modalOverlayBackground.current.addEventListener("click", () =>
      isDisplay(false)
    );
    return modalOverlayBackground.current.removeEventListener("click", () =>
      isDisplay(false)
    );
  }, []);

  const [titleTask, setTitleTask] = useState("");
  const [bodyTask, setBodyTask] = useState("");

  const addTask = async (task) => {
    const response = await fetch(
      `https://calendar-app-szadziu.herokuapp.com/api/event/${actuallyDate}`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.json();
  };

  return (
    <>
      <div ref={modalOverlayBackground} className="modal-overlay"></div>
      <div className="modal-calendar">
        <p>{`Wybrana data to: ${day.date}`}</p>
        <p>{`Masz ${day.events.length} wydarzeń na ten dzień`}</p>
        <button
          className="add-button-modal"
          onClick={() => addTask({ title: titleTask, body: bodyTask })}
        >
          add task
        </button>
        <label className="title-label" htmlFor="title">
          Title
        </label>
        <input
          value={titleTask}
          id="title"
          placeholder="wpisz tytuł"
          type="text"
          onChange={({ target: { value } }) => setTitleTask(value)}
        />
        <label className="body-label" htmlFor="body">
          Body
        </label>
        <input
          value={bodyTask}
          id="body"
          placeholder="wpisz treść"
          type="text"
          onChange={({ target: { value } }) => setBodyTask(value)}
        />
        <TaskList actuallyDate={actuallyDate} day={day} />
      </div>
    </>
  );
};

export default Modal;

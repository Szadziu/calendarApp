import { useEffect, useRef, useState } from "react";

import TaskList from "../TaskList";

import "./style.scss";

const Modal = ({ day, isDisplay }) => {
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
  // const [task, setTask] = useState({});

  const addTask = async (task) => {
    const actuallyDay = day.date.slice(0, 2).replace("-", "") * 1 - 1;
    console.log(actuallyDay);
    const actuallyMonth =
      day.date.slice(-7, -4).replace("-", "").replace("-", "") * 1 - 1;
    console.log(actuallyMonth);
    const actuallyYear = day.date.slice(-4);
    console.log(actuallyYear);

    const actuallyDate = `${actuallyDay}/${actuallyMonth}/${actuallyYear}`;

    console.log(typeof actuallyDate);
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
    console.log(
      `https://calendar-app-szadziu.herokuapp.com/api/event/${actuallyDay}/${actuallyMonth}/${actuallyYear}`
    );
    return response.json();
  };

  return (
    <>
      <div ref={modalOverlayBackground} className="modal-overlay"></div>
      <div className="modal-calendar">
        {`Wybrana data to: ${day.date} 
       Masz ${day.events.length} wydarzeń na ten dzień`}
        <button onClick={() => addTask({ title: titleTask, body: bodyTask })}>
          add task
        </button>
        <label htmlFor="title">Title</label>
        <input
          value={titleTask}
          id="title"
          placeholder="wpisz tytuł"
          type="text"
          onChange={({ target: { value } }) => setTitleTask(value)}
        />
        <label htmlFor="body">Body</label>
        <input
          value={bodyTask}
          id="body"
          placeholder="wpisz treść"
          type="text"
          onChange={({ target: { value } }) => setBodyTask(value)}
        />
        <TaskList day={day} />
      </div>
    </>
  );
};

export default Modal;

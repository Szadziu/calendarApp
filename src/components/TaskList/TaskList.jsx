import { useEffect, useState } from "react";
import "./style.scss";

const TaskList = ({
  day,
  actuallyDate,
  fetchMonth,
  actuallyMonth,
  actuallyYear,
}) => {
  const removeTaskUrl = "https://calendar-app-szadziu.herokuapp.com/api/event/";

  const [isMaxTasks, setIsMaxTasks] = useState(false);

  const checkAmountOfTasks = () => {
    if (day.events.length > 10) setIsMaxTasks(true);
  };

  const removeTask = async () => {
    await fetchMonth(actuallyMonth, actuallyYear);
  };

  useEffect(() => checkAmountOfTasks(), []);

  return (
    <div className="task-list-container">
      Lista wydarzeń:
      <ul className="task-list">
        {isMaxTasks && (
          <div className="info-modal">
            Zmniejsz ilość wydarzeń na ten dzień !
            <button onClick={() => setIsMaxTasks(false)}>OK</button>
          </div>
        )}
        {day.events.map((event) => (
          <li key={day.dayId} id={event._id} className="task">
            <h2>{event.title}</h2>
            <p>{event.body}</p>
            <button
              className="remove-task-button"
              id={event._id}
              onClick={async (e) => {
                if (e.target.id === event._id) {
                  const url = `${removeTaskUrl}${actuallyDate}/${e.target.id}`;
                  await fetch(url, { method: "DELETE" });
                  await removeTask();
                }
              }}
            >
              usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

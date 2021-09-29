import "./style.scss";

const TaskList = ({ day, actuallyDate }) => {
  return (
    <div className="task-list-container">
      Lista wydarzeń:
      <ul className="task-list">
        {day.events.map((event) => (
          <li key={day.dayId} id={event._id} className="task">
            <h2>{event.title}</h2>
            <p>{event.body}</p>
            <button
              id={event._id}
              onClick={(e) => {
                if (e.target.id === event._id) {
                  const url = `https://calendar-app-szadziu.herokuapp.com/api/event/${actuallyDate}/${e.target.id}`;
                  console.log(url);
                  fetch(url, { method: "DELETE" });
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

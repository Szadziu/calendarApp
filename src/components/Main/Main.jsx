import Calendar from "../Calendar/Calendar";
import Header from "../Header";
import "./style.scss";

const Main = ({ actuallyMonth, fetchMonth }) => {
  return (
    <div className="main-container">
      <Header fetchMonth={fetchMonth} />
      <Calendar fetchMonth={fetchMonth} actuallyMonth={actuallyMonth} />
    </div>
  );
};

export default Main;

import Calendar from "../Calendar/Calendar";
import Header from "../Header";

import "./style.scss";

const Main = ({ actuallyMonth, set }) => {
  return (
    <div className="main-container">
      <Header />
      <Calendar set={set} actuallyMonth={actuallyMonth} />
    </div>
  );
};

export default Main;

import Calendar from "../Calendar/Calendar";
import Header from "../Header";

import "./style.scss";

const Main = ({ actuallyMonth }) => {
  return (
    <div className="main-container">
      <Header />
      <Calendar actuallyMonth={actuallyMonth} />
    </div>
  );
};

export default Main;

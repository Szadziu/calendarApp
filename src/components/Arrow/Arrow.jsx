import "./style.scss";

const Arrow = ({ setNewMonth, currentMonth }) => {
  const setPreviousMonth = () => {
    if (currentMonth <= 0) setNewMonth(11);
    else setNewMonth(currentMonth - 1);
  };

  const setNextMonth = () => {
    if (currentMonth >= 11) setNewMonth(0);
    else setNewMonth(currentMonth + 1);
  };

  return (
    <div className="arrows-container">
      <div onClick={() => setPreviousMonth()} className="arrow">
        ⬅️
      </div>
      <div onClick={() => setNextMonth()} className="arrow">
        ➡️
      </div>
    </div>
  );
};

export default Arrow;

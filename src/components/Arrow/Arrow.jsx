import "./style.scss";

const Arrow = ({ setNewMonth, setNewYear, currentMonth, currentYear }) => {
  const setPreviousYear = () => {
    setNewYear(currentYear - 1);
    // else setNewYear(currentYear - 1);
  };

  const setNextYear = () => {
    setNewYear(currentYear + 1);
    // else setNewYear(currentYear + 1);
  };

  const setPreviousMonth = () => {
    if (currentMonth <= 0) {
      setNewMonth(11);
      setPreviousYear();
    } else setNewMonth(currentMonth - 1);
  };

  const setNextMonth = () => {
    if (currentMonth >= 11) {
      setNewMonth(0);
      setNextYear();
    } else setNewMonth(currentMonth + 1);
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

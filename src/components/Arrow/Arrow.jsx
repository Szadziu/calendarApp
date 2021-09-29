import "./style.scss";

const Arrow = ({
  setCurrentMonth,
  setCurrentYear,
  currentMonth,
  currentYear,
}) => {
  const setPreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const setNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const setPreviousMonth = () => {
    if (currentMonth <= 0) {
      setCurrentMonth(11);
      setPreviousYear();
    } else setCurrentMonth(currentMonth - 1);
  };

  const setNextMonth = () => {
    if (currentMonth >= 11) {
      setCurrentMonth(0);
      setNextYear();
    } else setCurrentMonth(currentMonth + 1);
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

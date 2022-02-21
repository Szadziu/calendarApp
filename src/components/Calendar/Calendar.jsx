import Day from '../Day';
import './style.scss';

const Calendar = ({ actuallyMonth, fetchMonth }) => {
  const renderDays = actuallyMonth.map((day) => (
    <Day fetchMonth={fetchMonth} key={day.dayId} day={day} />
  ));

  return <div className='main-calendar'>{renderDays}</div>;
};

export default Calendar;

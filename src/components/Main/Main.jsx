import Calendar from '../Calendar/Calendar';
import Header from '../Header';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './style.scss';

const Main = ({ actuallyMonth, fetchMonth }) => {
  const { width, height } = useWindowDimensions();
  const isDesktopScreen = width >= 800 && height >= 600;

  return isDesktopScreen ? (
    <div className='main-container'>
      <Header fetchMonth={fetchMonth} />
      <Calendar fetchMonth={fetchMonth} actuallyMonth={actuallyMonth} />
    </div>
  ) : (
    <div className='resolution-info'>
      {
        'Przykro mi :( aplikacja jest dostępna tylko dla urządzeń o rozdzielczości minimum 1366x768'
      }
    </div>
  );
};
export default Main;

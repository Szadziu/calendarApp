import { useState } from "react";
import Main from "../Main";
import { URL_GET_MONTH } from "../../utils/utils";

const App = () => {
  const [actuallyMonth, setActuallyMonth] = useState([]);
  const fetchMonth = (month, year) => {
    fetch(`${URL_GET_MONTH}${month}/${year}`)
      .then((response) => response.json())
      .then((data) => {
        setActuallyMonth(data.data.days);
      });
  };

  return (
    <div>
      <Main actuallyMonth={actuallyMonth} fetchMonth={fetchMonth} />
    </div>
  );
};

export default App;

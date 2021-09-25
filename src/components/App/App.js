import { useState, useEffect } from "react";

import Main from "../Main";
import Modal from "../Modal";

import { URL_GET_MONTH } from "../../utils/utils";

import "./style.scss";

function App() {
  const getActuallyMonth = async () => {
    try {
      const response = await fetch(`${URL_GET_MONTH}10/2021`);
      const data = await response.json();
      // console.log(data.data.days);
      return data.data.days;
    } catch (error) {
      return error;
    }
  };

  const month = getActuallyMonth();
  console.log(month);
  const [actuallyMonth, setActuallyMonth] = useState(month);
  console.log(actuallyMonth);
  return (
    <div className="app-container">
      <Main actuallyMonth={actuallyMonth} />
      <Modal />
    </div>
  );
}

export default App;

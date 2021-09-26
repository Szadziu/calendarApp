import { useState, useEffect } from "react";

import Main from "../Main";
import Modal from "../Modal";

import { URL_GET_MONTH } from "../../utils/utils";

import "./style.scss";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(`${URL_GET_MONTH}10/2021`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const getMonths = async () => {
    const data = await fetchData();
    setMonth(data.data.days);
    console.log("getmonths");
  };

  useEffect(() => {
    getMonths();
  }, []);
  const [month, setMonth] = useState(0);

  return (
    <div className="app-container">
      <Main
        actuallyMonth={[
          { date: "01-11-2021", dayId: 0, events: [1, 2] },
          { date: "01-11-2021", dayId: 1, events: [1, 2] },
          { date: "01-11-2021", dayId: 2, events: [1, 2] },
        ]}
      />
      {/* {activeDay && <Modal />} */}
    </div>
  );
}

export default App;

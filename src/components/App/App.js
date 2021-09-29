import { Component, useEffect } from "react";

import Main from "../Main";

import { URL_GET_MONTH } from "../../utils/utils";

class App extends Component {
  state = {
    actuallyMonth: [],
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
  };

  monthsOfYear = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  setNewMonth = (numberOfMonth) => {
    this.setState({
      currentMonth: numberOfMonth,
    });
  };
  fetchMonth = () => {
    fetch(
      `${URL_GET_MONTH}${this.state.currentMonth}/${this.state.currentYear}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          actuallyMonth: data.data.days,
        });
      });
  };

  render() {
    return (
      <div>
        <Main
          set={this.setActuallyMonth}
          actuallyMonth={this.state.actuallyMonth}
          monthsOfYear={this.monthsOfYear}
          setNewMonth={this.setNewMonth}
          currentMonth={this.state.currentMonth}
          fetchMonth={this.fetchMonth}
        />
      </div>
    );
  }
}

export default App;

// komponent funkcyjny

// import { useState, useEffect } from "react";

// import Main from "../Main";
// import Modal from "../Modal";

// import { URL_GET_MONTH } from "../../utils/utils";

// import "./style.scss";

// function App() {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(`${URL_GET_MONTH}10/2021`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return error;
//     }
//   };

//   // const getMonths = async () => {
//   //   const data = await fetchData();
//   //   setMonth(data.data.days);
//   //   console.log("getmonths");
//   // };

//   const getMonths = async () => {
//     await fetchData().then((data) => data.data.days);
//   };
//   const [month, setMonth] = useState(getMonths());

//   console.log(month);
//   return (
//     <div className="app-container">
//       <Main
//         actuallyMonth={[
//           { date: "01-11-2021", dayId: 0, events: [1, 2] },
//           { date: "01-11-2021", dayId: 1, events: [1, 2] },
//           { date: "01-11-2021", dayId: 2, events: [1, 2] },
//         ]}
//       />
//       {/* {activeDay && <Modal />} */}
//     </div>
//   );
// }

// export default App;

import { Component } from "react";

import Main from "../Main";
import Modal from "../Modal";

import { URL_GET_MONTH } from "../../utils/utils";

class App extends Component {
  state = {
    actuallyMonth: [],
  };

  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  fetchMonth = () => {
    console.log(this.currentMonth);
    fetch(`${URL_GET_MONTH}${this.currentMonth}/${this.currentYear}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          actuallyMonth: data.data.days,
        });
      });
  };

  // addEvents = (idDay, dayEvents) => {
  //   const copy = this.state.actuallyMonth
  //   const newEvents = copy[idDay].events.push(dayEvents)
  //   this.setState(newEvents)
  // }

  render() {
    console.log(this.state.actuallyMonth);
    return (
      <div>
        <button onClick={() => this.fetchMonth()}>Pobierz miesiąc</button>
        <Main
          set={this.setActuallyMonth}
          actuallyMonth={this.state.actuallyMonth}
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

import { Component } from "react";

import Main from "../Main";

import { URL_GET_MONTH } from "../../utils/utils";

class App extends Component {
  state = {
    actuallyMonth: [],
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
  };

  setNewMonth = (numberOfMonth) => {
    this.setState({
      currentMonth: numberOfMonth,
    });
  };

  setNewYear = (numberOfYear) => {
    this.setState({
      currentYear: numberOfYear,
    });
  };

  fetchMonth = (month, year) => {
    fetch(`${URL_GET_MONTH}${month}/${year}`)
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
          actuallyMonth={this.state.actuallyMonth}
          fetchMonth={this.fetchMonth}
        />
      </div>
    );
  }
}

export default App;

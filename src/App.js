import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React from "react";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  addCounter = () => {
    let counters = [...this.state.counters];
    console.log("counters: ", counters);
    const newCounter = { id: counters.at(-1).id + 1, value: 0 };
    console.log("new counter: ", newCounter);
    counters.push(newCounter);
    this.setState({ counters: counters });
    console.log(this.state);
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters;
    const newCounters = counters.filter((counter) => counter.id !== counterID);
    this.setState({ counters: newCounters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: newCounters });
  };

  // main render func
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container-fluid">
          <Counters
            onAdd={this.addCounter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

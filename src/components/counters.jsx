import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-small m-2"
        >
          reset
        </button>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-small m-2"
        >
          Add a counter
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React from "react";
import PropTypes from "prop-types";
import stl from "./Counter.module.css";
import Control from "./Control/Control";
import Value from "./Value/Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement() {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={stl.Counter}>
        <Value value={this.state.value} />

        <Control
          onIncrement={this.handleIncrement.bind(this)}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";
import stl from "./Dropdown.module.css";

class Dropdown extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  };

  render() {
    return (
      <div className={stl.Dropdown}>
        <button className={stl.Dropdown__toggle} onClick={this.toggle}>
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>

        {this.state.visible && (
          <div className={stl.Dropdown__menu} onClick={this.toggle}>
            Выплывающее меню
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;

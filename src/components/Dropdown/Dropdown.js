import  { Component } from "react";
import stl from "./Dropdown.module.css";

class Dropdown extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    visible: false,
    license: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  };

  checkboxChenge = (evt) => {
    this.setState({license: evt.target.checked})
  }

  render() {
    return (
      <div className={stl.Dropdown}>
        <button className={stl.Dropdown__toggle} onClick={this.toggle}>
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>
        <label> Пользовательское соглашение
          <input type="checkbox" onChange={this.checkboxChenge} />
        </label>
        

        {this.state.visible && (
          <div className={stl.Dropdown__menu} checked={this.state.license} onClick={this.toggle}>
            Выплывающее меню
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;

import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  state = {
    updateTodo: this.props.dataTodo,
    inputValue: "",
  };

  formSubmit = (evt) => {
    evt.preventDefault();

    this.props.onHandleSubmit(this.state.inputValue);
    this.resetForm();
  };

  inputChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  resetForm = () => {
    this.setState({
      inputValue: "",
    });
  };

  handleLicense = (evt) => {
    console.log(evt.target.checked);
    this.setState({
      license: evt.target.checked,
    });
  };

  render() {
    return (
      <div>
        <form className="TodoEditor" onSubmit={this.formSubmit}>
          <textarea
            type="text"
            className="TodoEditor__textArea"
            value={this.state.inputValue}
            name="todo"
            onChange={this.inputChange}
          ></textarea>

          <button className="TodoEditor__btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import "./Form.scss";
import Modal from "../../Alls/Modal/Modal";

class Form extends Component {
  state = {
    updateTodo: this.props.dataTodo,
    inputValue: "",
    isOpen: false,
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

  toggle = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" className="btn-modal" onClick={this.toggle}>
            Open
          </button>
          {this.state.isOpen && (
            <Modal onToggle={this.toggle}>
              При создании приложения с использованием React, разработчик не
              взаимодействует с DOM-деревом напрямую. Его задача описать
              интерфейс с помощью компонентов (шаблон) и управлять изменением
              данных (модель). React, при изменении данных модели, сам обновит
              интерфейс по шаблону.
              <button type="button" className="btn" onClick={this.toggle}>
                Close
              </button>
            </Modal>
          )}
        </div>
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

import React, { Component } from "react";
import "./Form.scss";
import {ReactComponent as SendIcon} from '../../../icons svg/icon-send.svg'
import IconButton from "../../IconButton/IconButton";

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
          <IconButton  type="submit" aria-label="Добавить заметку"> 
            <SendIcon width="40" height="40" />
          </IconButton>

          {/* <button className="TodoEditor__btn" type="submit">
            Сохранить
          </button> */}
        </form>
      </div>
    );
  }
}

export default Form;

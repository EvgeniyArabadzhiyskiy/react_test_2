import "./Modal.css";
import { createPortal } from "react-dom";
import React, { Component } from "react";

// const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  backDropClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onToggle();
    }
  };

  componentDidMount() {
    // console.log("hello");
    window.addEventListener("keydown", this.onESC);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.onESC);
  }

  onESC = (evt) => {
    if (evt.code === "Escape") {
      this.props.onToggle();
    }
  };

  render() {
    return createPortal(
      <div>
        <div className="backdrop" onClick={this.backDropClose}>
          <div className="modal__window">{this.props.children}</div>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}

export default Modal;

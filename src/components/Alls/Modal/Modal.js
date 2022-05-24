import "./Modal.css";
import { createPortal } from "react-dom";
import React, { Component } from "react";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  backDropClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onToggle();
    }
  };

  componentDidMount() {
    console.log("hello");
    window.addEventListener("keydown", this.onESC);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onESC);
  }

  onESC = (evt) => {
    console.log(evt.code);
    if (evt.code === "Escape") {
      this.props.onToggle();
    }
  };

  render() {
    return createPortal(
      <div>
        {/* <button type="button" className="btn-modal" onClick={this.props.onToggle}>
          Open
        </button> */}

        <div
          className="backdrop"
          // className={`${"backdrop"} ${this.state.isHidden}`.trim()}
          // onClick={this.props.onToggle}
          onClick={this.backDropClose}
        >
          <div className="modal__window">{this.props.children}</div>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}

// const Modal = ({onToggle, onClose}) => {

//   return (
//     <div>
//       {/* <button type="button" className="btn-modal" onClick={this.props.onToggle}>
//         Open
//       </button> */}

//        <div
//        className="backdrop"
//         // className={`${"backdrop"} ${this.state.isHidden}`.trim()}
//         // onClick={this.props.onToggle}
//         data-modal="modal"
//         onClick={onClose}
//       >
//         <div className="modal__window"></div>
//         <button type="button"  onClick={onToggle}>
//         Close
//       </button>
//       </div>
//     </div>)

// }

export default Modal;

import "./Modal.css";
import React, { Component } from "react";

class Modal extends Component {
  state = {
    isHidden: "",
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        isHidden: prevState.isHidden === "" ? "no__hidden" : "",
      };
    });
  };

  render() {
    return (
      <div>
        <button className="btn-modal" onClick={this.toggle}>
          Open
        </button>

        <div
          className={`${"backdrop"} ${this.state.isHidden}`.trim()}
          onClick={this.toggle}
        >
          <div className="modal__window"></div>
        </div>
      </div>
    );
  }
}

// import stl from './modalPlus.module.css'
// const Modal = () => {
//   return (
//     <div>
//       <button className="btn-modal">Open</button>
//       <div className={`${stl.backdrop} ${stl.no__hidden}`}>
//         <div className={stl.modal__window}></div>
//       </div>
//     </div>
//   );
// };

export default Modal;

import "./Modal.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
// import React, { Component } from "react";

// const modalRoot = document.querySelector("#modal-root");

const Modal = ({onToggle, children='Здесь могла бы быть ваша реклама' }) => {

  const  backDropClose = (evt) => {
    if (evt.currentTarget === evt.target) {
      onToggle();
    }
  };

  useEffect(() => {
    console.log('privet');
    window.addEventListener('keydown',  onEscPress)

    function onEscPress(evt) {
      console.log('hello')
      if (evt.code === "Escape") {
        onToggle();
      }
    }

    return () => {
      window.removeEventListener('keydown',  onEscPress)
    }
  })



  return createPortal(
    <div>
      <div className="backdrop" onClick={backDropClose}>
        <div className="modal__window">{children}</div>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default Modal;



console.log('hello 1');






// class Modal extends Component {
//   backDropClose = (evt) => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onToggle();
//     }
//   };

//   componentDidMount() {
//     // console.log("hello");
//     window.addEventListener("keydown", this.onESC);
//   }

//   componentWillUnmount() {
//     // console.log("componentWillUnmount");
//     window.removeEventListener("keydown", this.onESC);
//   }

//   onESC = (evt) => {
//     if (evt.code === "Escape") {
//       this.props.onToggle();
//     }
//   };

//   render() {
//     return createPortal(
//       <div>
//         <div className="backdrop" onClick={this.backDropClose}>
//           <div className="modal__window">{this.props.children}</div>
//         </div>
//       </div>,
//       document.querySelector("#modal-root")
//     );
//   }
// }

// export default Modal;

import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import stl from "./ColorPicker.module.css";
// import PropTypes from "prop-types";
import Buttons from "./Buttons/Buttons";
import classNames from "classnames";
import Modal from "../Alls/Modal/Modal";

const ColorPicker = ({ options }) => {
  const [activIndex, setActivIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activ, setactiv] = useState(10);
  

  const { label, color, image } = options[activIndex];
  

  const onPlus = (e) => {
    setactiv((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    
    // console.log("ColorPicker ~ activ", activ);
    const documentTitleClicks = activ + activIndex
    document.title = `Click ${documentTitleClicks}`
    // console.log("hello");
    // setActivIndex(55)
    // setactiv(100)
  },[activIndex,activ ]);

  // console.log("ColorPicker ~ activIndex", activIndex);
  // console.log("ColorPicker ~ activ", activ);

  const makeOptionClassesName = (index) => {
    return classNames(stl.opti, {
      [stl.opti__action]: index === activIndex,
    });
  };

  const click = (index) => {
    setActivIndex(index);
    toggle()
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={onPlus}>Plus</button>
      <button type="button" className="btn-modal" onClick={toggle}>
        Open
      </button>
      {isOpen && <Modal onToggle={toggle}>
        <div style={{ backgroundColor: color, height: "100%", width: "100%" }}>
          <img src={image} width={100} alt={image} />
        </div>
        </Modal>}

      <h2>Color Picker</h2>
      <p className={stl.text} style={{ backgroundColor: color }}>
        Выбран цвет: {label}
      </p>

      <Buttons
        options={options}
        onMakeClassOptions={makeOptionClassesName}
        onMakeIndex={click}
      />
    </div>
  );
};

export default ColorPicker;

// class ColorPicker extends Component {
//   static propTypes = {
//     options: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         color: PropTypes.string.isRequired,
//       }).isRequired
//     ),
//   };

//   state = {
//     activIndex: 0,
//   };

//   click = (index) => {
//     this.setState({
//       activIndex: index,
//     });
//   };

//   makeOptionClassesName = (index) => {
//     return classNames(stl.opti, {
//       [stl.opti__action]: index === this.state.activIndex,
//     });

//     // const optionClass = [stl.opti];

//     // if (index === this.state.activIndex) {
//     //   optionClass.push(stl.opti__action);
//     // }
//     // return optionClass.join(" ");
//   };

//   render() {
//     const { activIndex } = this.state;
//     const { options } = this.props;
//     const { label, color } = options[activIndex];

//     return (
//       <div>
//         <h2>Color Picker</h2>
//         <p className={stl.text} style={{ backgroundColor: color }}>
//           Выбран цвет: {label}
//         </p>

//         <Buttons
//           options={options}
//           onMakeClassOptions={this.makeOptionClassesName}
//           onMakeIndex={this.click}
//         />
//       </div>
//     );
//   }
// }

// export default ColorPicker;

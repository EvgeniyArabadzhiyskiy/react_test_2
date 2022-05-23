import stl from "./Alert.module.css";
import PropTypes from "prop-types";

function Alert({ text, type = "alert" }) {
  // const alertClass =  type ? [`Alert Alert--${type}`]  : ['Alert'];
  // console.log("Alert ~ alertClass", alertClass);

  return <p className={stl[type]}>{text}</p>;
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "warning", "success"]).isRequired,
};

export default Alert;

// { alertClass.join(' ')}

// let array = []

// let x = 10
// x = true ? x + 10 : 5
// console.log("x:", x);

// let array = x > 5 ? [x] : [`${x * 2}`]

// if (false) {
//     array.push('sss')
// }
// else{
//     array.push('ddd')
// }

// array.push('sss')

// console.log("array", array);

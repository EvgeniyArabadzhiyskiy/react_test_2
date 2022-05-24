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


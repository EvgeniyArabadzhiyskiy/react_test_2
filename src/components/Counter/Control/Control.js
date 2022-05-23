import stl from "./Control.module.css";
import PropTypes from "prop-types";

function Control({ onIncrement, onDecrement }) {
  return (
    <div className="Counter__controls">
      <button className={stl.button} type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button className={stl.button} type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
}

Control.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Control;

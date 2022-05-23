import stl from "./Value.module.css";
import PropTypes from "prop-types";

const Value = ({ value }) => {
  return <span className={stl.Counter__value}>{value}</span>;
};

Value.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Value;

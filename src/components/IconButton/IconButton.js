import "./IconButton.scss";
import PropTypes from "prop-types";

const IconButton = ({ children, onClick, type="button", ...allyProps }) => {
  return (
    <button type={type} className="IconButton" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default IconButton;

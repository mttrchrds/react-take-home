import PropTypes from "prop-types";

const Button = ({ onClick, children, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool,
};

export default Button;

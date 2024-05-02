import PropTypes from "prop-types";

import { default as BootstrapButton } from "react-bootstrap/Button";

const Button = ({ onClick, children, type, disabled, variant }) => {
  return (
    <BootstrapButton
      type={type}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
      variant={variant}
    >
      {children}
    </BootstrapButton>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  variant: "primary",
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

export default Button;

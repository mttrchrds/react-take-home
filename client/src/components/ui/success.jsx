import PropTypes from "prop-types";

import Alert from "react-bootstrap/Alert";

const Success = ({ text }) => {
  return <Alert variant="success">{text}</Alert>;
};

Success.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Success;

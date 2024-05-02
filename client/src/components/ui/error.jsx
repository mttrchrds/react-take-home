import PropTypes from "prop-types";

import Alert from "react-bootstrap/Alert";

const Error = ({ text }) => {
  return <Alert variant="danger">{text}</Alert>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;

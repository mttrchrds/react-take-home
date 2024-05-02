import PropTypes from "prop-types";

import Alert from "react-bootstrap/Alert";

const Warning = ({ text }) => {
  return <Alert variant="warning">{text}</Alert>;
};

Warning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Warning;

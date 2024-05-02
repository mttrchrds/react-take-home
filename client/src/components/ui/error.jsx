import PropTypes from "prop-types";

const Error = ({ text }) => {
  return <h3>{text}</h3>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;

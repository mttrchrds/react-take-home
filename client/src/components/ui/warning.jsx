import PropTypes from "prop-types";

const Warning = ({ text }) => {
  return <h3>{text}</h3>;
};

Warning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Warning;

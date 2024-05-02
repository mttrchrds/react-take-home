import PropTypes from "prop-types";

const Success = ({ text }) => {
  return <h3>{text}</h3>;
};

Success.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Success;

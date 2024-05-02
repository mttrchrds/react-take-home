import PropTypes from "prop-types";

const PageTitle = ({ children }) => {
  return <h1>{children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;

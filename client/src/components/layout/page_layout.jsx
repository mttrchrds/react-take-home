import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand>Search Pilot </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;

import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

const TextInput = ({ name, onChange, label, value, error }) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        onChange={onChange}
        value={value}
        isInvalid={error}
      />
    </Form.Group>
  );
};

TextInput.defaultProps = {
  error: false,
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default TextInput;

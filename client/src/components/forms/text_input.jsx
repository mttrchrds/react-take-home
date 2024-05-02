import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

const TextInput = ({ name, onChange, label, value }) => {
  return (
    // <div>
    //   <label htmlFor={name}>{label}</label>
    //   <input
    //     type="text"
    //     onChange={onChange}
    //     value={value}
    //     name={name}
    //     id={name}
    //   />
    // </div>
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" onChange={onChange} value={value} />
    </Form.Group>
  );

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>;
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;

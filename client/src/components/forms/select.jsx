import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

const Select = ({
  name,
  onChange,
  label,
  value,
  options,
  defaultOptionLabel,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select onChange={onChange} value={value} name={name}>
        {defaultOptionLabel && <option value="">{defaultOptionLabel}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;

import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import ReactSelect from "react-select";

const Select = ({
  onChange,
  label,
  value,
  options,
  defaultOptionLabel,
  multi,
}) => {
  const handleChange = (payload) => {
    if (multi) {
      onChange(payload);
    } else {
      onChange(payload.value);
    }
  };

  const defaultValue = () => {
    if (value) {
      if (multi) {
        return value;
      } else {
        return {
          label: value,
          value,
        };
      }
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <ReactSelect
        options={options}
        isMulti={multi}
        onChange={handleChange}
        value={defaultValue()}
        placeholder={defaultOptionLabel}
        isClearable={false}
      />
    </Form.Group>
  );
};

Select.defaultProps = {
  multi: false,
  isClearable: false,
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  multi: PropTypes.bool,
  isClearable: PropTypes.bool,
  defaultOptionLabel: PropTypes.string,
};

export default Select;

import PropTypes from "prop-types";

const Select = ({
  name,
  onChange,
  label,
  value,
  options,
  defaultOptionLabel,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        id={name}
      >
        {defaultOptionLabel && <option value="">{defaultOptionLabel}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
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
  defaultOptionLabel: PropTypes.string,
};

export default Select;

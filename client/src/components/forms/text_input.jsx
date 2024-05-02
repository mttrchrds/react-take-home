import PropTypes from "prop-types";

const TextInput = ({ name, onChange, label, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;

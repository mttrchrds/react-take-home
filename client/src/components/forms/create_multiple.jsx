import { useState } from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

const CreateMultiple = ({
  onChange,
  label,
  value,
  defaultOptionLabel,
  onAdd,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [internalValue, setInternalValue] = useState(value);

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setInternalValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        onAdd(createOption(inputValue));
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleOnChange = (payload) => {
    setInternalValue(payload);
    onChange(payload);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handleOnChange}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder={defaultOptionLabel}
        value={internalValue}
      />
    </Form.Group>
  );
};

CreateMultiple.defaultProps = {
  value: [],
};

CreateMultiple.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  defaultOptionLabel: PropTypes.string,
};

export default CreateMultiple;

import { useState } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";

import { enumsProductTypes } from "../../../utilities/enums";

import TextInput from "../../../components/forms/text_input";
import Button from "../../../components/forms/button";
import Select from "../../../components/forms/select";
import Error from "../../../components/ui/error";
import Success from "../../../components/ui/success";

const ProductForm = ({
  product,
  submitHandler,
  loading,
  error,
  success,
  submitLabel,
}) => {
  const [formValueName, setFormValueName] = useState(_get(product, "name", ""));
  const [formValueType, setFormValueType] = useState(_get(product, "type", ""));
  const [formValueSizes, setFormValueSizes] = useState(
    _get(product, "sizes", [])
  );
  const [formValueFeatures, setFormValueFeatures] = useState(
    _get(product, "sizes", [])
  );
  const [formValueBrand, setFormValueBrand] = useState(
    _get(product, "brand", "")
  );
  const [formValueNeckline, setFormValueNeckline] = useState(
    _get(product, "neckline", "")
  );
  const [formValueColour, setFormValueColour] = useState(
    _get(product, "colour", "")
  );
  const [formValueStyle, setFormValueStyle] = useState(
    _get(product, "colour", "")
  );
  const [formValueMaterials, setFormValueMaterials] = useState(
    _get(product, "materials", "")
  );

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitHandler({
      name: formValueName,
      type: formValueType,
      sizes: formValueSizes,
      features: formValueFeatures,
      brand: formValueBrand,
      neckline: formValueNeckline,
      colour: formValueColour,
      style: formValueStyle,
      materials: formValueMaterials,
    });
  };

  const handleChangeName = (e) => {
    setFormValueName(e.target.value);
  };

  const renderSecondaryFields = () => {
    if (formValueType) {
      return (
        <>
          <TextInput
            name="brand"
            value={formValueBrand}
            onChange={(e) => setFormValueBrand(e.target.value)}
            label="Brand"
          />
          <TextInput
            name="style"
            value={formValueStyle}
            onChange={(e) => setFormValueStyle(e.target.value)}
            label="Style"
          />
          <TextInput
            name="colour"
            value={formValueColour}
            onChange={(e) => setFormValueColour(e.target.value)}
            label="Colour"
          />
          <TextInput
            name="materials"
            value={formValueMaterials}
            onChange={(e) => setFormValueMaterials(e.target.value)}
            label="Materials"
          />
          <TextInput
            name="neckline"
            value={formValueNeckline}
            onChange={(e) => setFormValueNeckline(e.target.value)}
            label="Neckline"
          />
        </>
      );
    }
  };

  return (
    <>
      {error && <Error text={error} />}
      {success && <Success text={success} />}
      <fieldset disabled={loading}>
        <form onSubmit={handleSubmitForm}>
          <TextInput
            name="name"
            value={formValueName}
            onChange={handleChangeName}
            label="Product name"
          />
          <Select
            name="type"
            value={formValueType}
            onChange={(e) => setFormValueType(e.target.value)}
            label="Product type"
            options={enumsProductTypes.map((p) => ({
              label: p,
              value: p,
            }))}
            defaultOptionLabel="Select a type"
          />
          {renderSecondaryFields()}
          <Button type="submit" disabled={formValueType ? false : true}>
            {submitLabel}
          </Button>
        </form>
      </fieldset>
    </>
  );
};

ProductForm.defaultProps = {
  loading: false,
  error: "",
  success: "",
  submitLabel: "Create product",
};

ProductForm.propTypes = {
  product: PropTypes.object,
  submitHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  createLabel: PropTypes.string,
};

export default ProductForm;

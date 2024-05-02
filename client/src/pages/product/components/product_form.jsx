import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _debounce from "lodash/debounce";
import axios from "axios";

import {
  enumsProductTypes,
  enumsProductTypeFootwear,
  enumsFootwearSizes,
  enumsClothingSizes,
} from "../../../utilities/enums";
import { usePrevious } from "../../../utilities/hooks";

import TextInput from "../../../components/forms/text_input";
import Button from "../../../components/forms/button";
import Select from "../../../components/forms/select";
import Error from "../../../components/ui/error";
import Success from "../../../components/ui/success";
import Form from "react-bootstrap/Form";
import CreateMultiple from "../../../components/forms/create_multiple";

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
    _get(product, "features", [])
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
    _get(product, "style", "")
  );
  const [formValueMaterials, setFormValueMaterials] = useState(
    _get(product, "materials", "")
  );
  const [duplicateName, setDuplicateName] = useState(false);
  const [sOptions, setSOptions] = useState([]);

  const debouncedNameCheck = useMemo(
    () =>
      _debounce((name) => {
        axios
          .post(`http://localhost:8080/api/validate`, {
            name,
          })
          .then((response) => {
            setDuplicateName(false);
          })
          .catch((error) => {
            setDuplicateName(true);
          });
      }, 300),
    []
  );

  const prevFormValueType = usePrevious(formValueType);

  useEffect(() => {
    if (formValueType === enumsProductTypeFootwear) {
      setSOptions(enumsFootwearSizes);
    } else {
      setSOptions(enumsClothingSizes);
    }
    // Ensure that sizes are cleared when switching type
    if (prevFormValueType && prevFormValueType !== formValueType) {
      setFormValueSizes([]);
    }
  }, [formValueType, prevFormValueType]);

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
    debouncedNameCheck(e.target.value);
  };

  const handleChangeSizes = (payload) => {
    const parsedPayload = payload.map((p) => p.value);
    setFormValueSizes(parsedPayload);
  };

  const handleChangeFeatures = (payload) => {
    const parsedPayload = payload.map((p) => p.value);
    setFormValueFeatures(parsedPayload);
  };

  const handleAddFeature = (payload) => {
    setFormValueFeatures((prev) => [...prev, payload.value]);
  };

  const renderSecondaryFields = () => {
    if (formValueType) {
      return (
        <>
          <Select
            options={sOptions.map((o) => ({
              label: o,
              value: o,
            }))}
            multi={true}
            onChange={handleChangeSizes}
            defaultOptionLabel="Select sizes"
            value={formValueSizes.map((s) => ({
              label: s,
              value: s,
            }))}
            label="Sizes"
            name="sizes"
          />
          <TextInput
            name="brand"
            value={formValueBrand}
            onChange={(e) => setFormValueBrand(e.target.value)}
            label="Brand"
          />
          <CreateMultiple
            value={formValueFeatures.map((f) => ({ label: f, value: f }))}
            onChange={handleChangeFeatures}
            onAdd={handleAddFeature}
            label="Features"
            defaultOptionLabel="Enter some features"
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
      {error && (
        <div className="mb-4">
          <Error text={error} />
        </div>
      )}
      {duplicateName && (
        <div className="mb-4">
          <Error text="Product name must be unique" />
        </div>
      )}
      {success && (
        <div className="mb-4">
          <Success text={success} />
        </div>
      )}
      <fieldset disabled={loading}>
        <Form onSubmit={handleSubmitForm}>
          <TextInput
            name="name"
            value={formValueName}
            onChange={handleChangeName}
            label="Product name"
            error={duplicateName}
          />
          <Select
            name="type"
            value={formValueType}
            onChange={(value) => setFormValueType(value)}
            label="Product type"
            options={enumsProductTypes.map((p) => ({
              label: p,
              value: p,
            }))}
            defaultOptionLabel="Select a type"
          />
          {renderSecondaryFields()}
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              disabled={
                !formValueType || !formValueName || duplicateName ? true : false
              }
            >
              {submitLabel}
            </Button>
          </div>
        </Form>
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

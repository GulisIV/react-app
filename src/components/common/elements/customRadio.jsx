import "../common.scss";
import React from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomRadio = ({ placeholder, width, disabled, meta: { checked }, value }) => {
  let labelClassname = checked ? "radio-touched" : "radio-basic";
  return (
    <>
      <Form.Field width={width} className="radio-field">
        <label className={labelClassname}>{placeholder}</label>
        <input disabled={disabled} type="radio" className="button" value={value} checked={checked} />
      </Form.Field>
    </>
  );
};

CustomRadio.propTypes = {
  placeholder: PropTypes.any,
  width: PropTypes.any,
  meta: PropTypes.any,
};

export default CustomRadio;

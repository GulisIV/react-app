import "../common.scss";
import React from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomInput = ({ input, type, width, placeholder }) => {
  const handlePaste = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form.Field width={width}>
        <label className="textarea-label">{placeholder}</label>
        <textarea
          type={type}
          className="textarea-basic"
          maxLength="200"
          onPasteCapture={handlePaste}
          {...input}
        />
      </Form.Field>
    </>
  );
};

CustomInput.propTypes = {
  input: PropTypes.any,
  type: PropTypes.any,
  width: PropTypes.any,
  placeholder: PropTypes.any,
  meta: PropTypes.any,
};

export default CustomInput;

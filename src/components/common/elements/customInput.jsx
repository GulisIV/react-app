import "../common.scss";
import React from "react";
import { Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { registerLoginFetch, registerPassFetch, registerConfirmPassFetch, registerNameFetch, registerSurnameFetch } from "../../../AppActions";

const CustomInput = ({ input, type, width, placeholder, disabled, meta: { error, touched, dirty, visited } }) => {
  const inputErrorClassName = error && touched ? "input-border" : "";
  const floatLabel = type != "radio" ? "float-label" : "";
  let inputClassName = dirty ? "input-dirty" : "input-basic";
  let dateInputColor = "";

  if (type == "radio") {
    inputClassName = "";
  }

  const dispatch = useDispatch();

  const checkInputType = () => {
    switch (type) {
      case "number":
        return "input__number-arrows";
      case "date":
        return "input__date-calendar";
      case "radio":
        return "input__radio";
      default:
        return ""
    }  
  };

  const extraClass = checkInputType();

  if (touched) {
    switch (input.name) {
      case "name":
        dispatch(registerNameFetch(error));
      case "surname":
        dispatch(registerSurnameFetch(error));
      case "email":
        dispatch(registerLoginFetch(error));
      case "password":
        dispatch(registerPassFetch(error));
      case "confirmPassword":
        dispatch(registerConfirmPassFetch(error));
    };  
  }

  if (type == "date") {
    dirty ? dateInputColor = "" : dateInputColor = "input__date-calendar-color";
  }


  return (
    <>
      <Form.Field width={width} className={floatLabel}>
        <input
          disabled={disabled}
          type={type}       
          className={inputClassName + ' ' + inputErrorClassName + ' ' + extraClass + ' ' + dateInputColor}
          {...input}
        />
        {input.value != "" || dirty ?
        <label className={"active login-label"}>{placeholder}</label> :
        <label className={"login-label" }>{placeholder}</label>}
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

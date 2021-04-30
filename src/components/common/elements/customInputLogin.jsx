import "../common.scss";
import React from "react";
import { Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { authLoginFetch, authPassFetch } from "../../../AppActions";

const CustomInputLogin = ({ input, type, width, placeholder, meta: { error, touched, dirty } }) => {
  let inputClassName = dirty ? "login-dirty" : "login-basic";
  let inputErrorClassName = error && touched ? "input-border" : "";

  const dispatch = useDispatch();

  if (touched) {
    if (type == "password") {
      dispatch(authPassFetch(error));
    } else {
      dispatch(authLoginFetch(error));
    }  
  }

  return (
    <>
      <Form.Field width={width} className="float-label">
        <input
          type={type}
          className={inputClassName + ' ' + inputErrorClassName}
          {...input}
        />
        {input.value != "" || dirty ?
        <label className={"active login-label"}>{placeholder}</label> :
        <label className={"login-label" }>{placeholder}</label>}
      </Form.Field>
    </>
  );
};

CustomInputLogin.propTypes = {
  input: PropTypes.any,
  type: PropTypes.any,
  width: PropTypes.any,
  placeholder: PropTypes.any,
  meta: PropTypes.any,
};

export default CustomInputLogin;

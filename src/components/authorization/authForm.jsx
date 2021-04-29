import "./auth.scss";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import messages from "../../Messages";
import * as Validations from "../../Validations";
import CustomInputLogin from "../common/elements/customInputLogin";

const AuthForm = ({
  intl,
  handleSubmit,
  isEdit,
  isDisabled
}) => {
  const buttonSubmit = intl.formatMessage(messages.enter);
  const authLoginError = useSelector((state) => state.FlyserStore.authLoginError);
  const authPassError = useSelector((state) => state.FlyserStore.authPassError);
  let emptyData = false;
  let errorView = "";

  if (authLoginError) {
    errorView = authLoginError;
    emptyData = true;
  }

  if (authPassError) {
    errorView = authPassError;
    emptyData = true;
  }

  return (
    <Form>
      <Field
        name="email"
        placeholder={intl.formatMessage(messages.login)}
        component={CustomInputLogin}
        validate={[Validations.required, Validations.email]}
        readOnly={isEdit}
      />
      <Field
        name="password"
        type="password"
        placeholder={intl.formatMessage(messages.password)}
        component={CustomInputLogin}
        validate={[Validations.required, Validations.password]}
      />
      {/* <h5 className="center">{intl.formatMessage(messages.forgetPassword)}</h5> */}
      <div className="auth__modal-error">{errorView}</div>
      <Button
        onClick={handleSubmit}
        primary
        type="submit"
        content={buttonSubmit}
        size="large"
        fluid
        className="signin-button"
        disabled={emptyData || isDisabled}
      />
    </Form>
  );
};

AuthForm.propTypes = {
  intl: PropTypes.any,
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default reduxForm({
  form: "authClient",
})(injectIntl(AuthForm));

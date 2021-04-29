import "./auth.scss";
import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Header } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import messages from "../../Messages";
import AuthForm from "./authForm";
import CommonModal from "../common/elements/commonModal";
import RegistrationModal from "../contentPage/data/registrationModal";
import { login, getUserRole, refreshToken } from "../../AppActions";
import { useHistory } from "react-router-dom";
import { policyData } from "../../static/text/privacyPolicy";
import { termsData } from "../../static/text/termsOfUse";
import { registerLoginFetch, registerPassFetch, registerConfirmPassFetch, registerNameFetch, registerSurnameFetch } from "../../AppActions";

const rightsHeader = "УСЛОВИЯ ИСПОЛЬЗОВАНИЯ";
const rightsContent = "Это правила пользования";

const policyHeader = "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ";
const policyContent = "Это политика безопасности";

const AuthModal = ({ intl }) => {
  const loginStatus = useSelector((state) => state.FlyserStore.loginStatus);
  const userRole = useSelector((state) => state.FlyserStore.userRole);

  const [open, setOpen] = useState(true);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [dimmer, setDimmer] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [openRights, setOpenRights] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const toggleRightsModal = () => {
    setOpenRights(!openRights);
  };

  const togglePolicyModal = () => {
    setOpenPolicy(!openPolicy);
  };

  const toggleRegistrationModal = () => {
    setOpenRegistration(!openRegistration);
    dispatch(registerNameFetch(undefined));
    dispatch(registerSurnameFetch(undefined));
    dispatch(registerLoginFetch(undefined));
    dispatch(registerPassFetch(undefined));
    dispatch(registerConfirmPassFetch(undefined));
  };

  const mapPropsToApi = (item) => ({
    login: item.email,
    password: item.password,
  });

  const rights = intl.formatMessage(messages.rights);
  const policy = intl.formatMessage(messages.policy);

  useEffect(() => {
    dispatch(getUserRole());
  }, []);

  const handleSubmit = useCallback(
    (values) => {
      let payload = mapPropsToApi(values);
      dispatch(login(payload));
      setDisabled(true);
      setTimeout(() => {
        refreshTokenCallback();
      }, 1000);
    },
    [dispatch, useSelector]
  );

  const refreshTokenCallback = () => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    ) {
      dispatch(refreshToken());
    }
    history.push("/panel");
  };

  return (
    <>
      <Modal open={open} size="mini">
        <Header content={intl.formatMessage(messages.enterAccount)} />
        <Modal.Content>
          <AuthForm onSubmit={handleSubmit} isDisabled={disabled} />
          <h5 className="center">
            {intl.formatMessage(messages.youDoctor)}{" "}
            <a onClick={() => setOpenRegistration(true)}>
              {intl.formatMessage(messages.createAccount)}
            </a>
          </h5>
          {openRegistration && <RegistrationModal open={openRegistration} handleClose={toggleRegistrationModal} />}
          <h6 className="center">
            {intl.formatMessage(messages.pressEnter, {
              rights: <a onClick={toggleRightsModal}>{rights}</a>,
              policy: <a onClick={togglePolicyModal}>{policy}</a>,
            })}
          </h6>
        </Modal.Content>
        <CommonModal
          dimmer={dimmer}
          openModal={openRights}
          handleClose={toggleRightsModal}
          header={rightsHeader}
          content={termsData}
          size="large"
        />
        <CommonModal
          dimmer={dimmer}
          openModal={openPolicy}
          handleClose={togglePolicyModal}
          header={policyHeader}
          content={policyData}
          size="large"
        />
      </Modal>
    </>
  );
};

AuthModal.propTypes = {
  intl: PropTypes.any,
  closeModal: PropTypes.bool,
};

export default injectIntl(AuthModal);

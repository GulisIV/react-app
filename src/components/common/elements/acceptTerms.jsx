import "../common.scss";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import messages from "../../../Messages";

const AcceptTerms = ({
  intl,
  toggleRightsModal,
  togglePolicyModal,
  toggleIcon,
  showChecked,
}) => {
  const rights = intl.formatMessage(messages.rights);
  const policy = intl.formatMessage(messages.policy);

  const emptyIcon = (
    <Icon
      onClick={toggleIcon}
      name="circle outline"
      size="big"
      className="icon-align"
    />
  );
  const checkedIcon = (
    <Icon
      onClick={toggleIcon}
      name="check circle"
      size="big"
      className="icon-align color__checked-icon"
    />
  );

  return (
    <>
      {showChecked ? checkedIcon : emptyIcon}
      <p className="p-align">
        {intl.formatMessage(messages.accept, {
          rights: <a onClick={toggleRightsModal}>{rights}</a>,
          policy: <a onClick={togglePolicyModal}>{policy}</a>,
        })}
      </p>
    </>
  );
};

AcceptTerms.propTypes = {
  intl: PropTypes.any,
  toggleRightsModal: PropTypes.func,
  togglePolicyModal: PropTypes.func,
  toggleIcon: PropTypes.func,
  showChecked: PropTypes.bool,
};

export default injectIntl(AcceptTerms);

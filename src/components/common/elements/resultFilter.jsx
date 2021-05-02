import "../common.scss";
import React from "react";
import { Button } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import messages from "../../../Messages";
import PropTypes from "prop-types";

const ResultFilter = ({ intl }) => {
  return (
    <>
      <h5 className="panel__heading-5">
        {intl.formatMessage(messages.result)}
      </h5>
      <div className="panel__buttons-container">
        <Button
          basic
          compact
          color="blue"
          className="panel__buttons-container_button"
          content={intl.formatMessage(messages.all)}
        />
        <Button
          basic
          compact
          color="green"
          className="panel__buttons-container_button"
          content={intl.formatMessage(messages.excellent)}
        />
        <Button
          basic
          compact
          color="yellow"
          className="panel__buttons-container_button"
          content={intl.formatMessage(messages.good)}
        />
        <Button
          basic
          compact
          color="red"
          className="panel__buttons-container_button"
          content={intl.formatMessage(messages.satisfactorily)}
        />
      </div>
    </>
  );
};

ResultFilter.propTypes = {
  intl: PropTypes.any,
};

export default injectIntl(ResultFilter);

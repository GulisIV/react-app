import "../common.scss";
import React from "react";
import { Button } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import messages from "../../../Messages";
import PropTypes from "prop-types";

const StatusFilter = ({ intl, isAddClient }) => {
  const buttons = isAddClient ? (
    <div className="filter-buttons">
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
        color="yellow"
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.inProcess)}
      />
      <Button
        primary
        compact
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.complete)}
      />{" "}
    </div>
  ) : (
    <>
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
        color="yellow"
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.inProcess)}
      />
      <Button
        basic
        compact
        color="green"
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.ready)}
      />
      <Button
        primary
        compact
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.complete)}
      />
      <Button
        basic
        compact
        color="black"
        className="panel__buttons-container_button"
        content={intl.formatMessage(messages.registration)}
      />
    </>
  );
  return (
    <>
      <h5 className="panel__heading-5">
        {intl.formatMessage(messages.status)}
      </h5>
      <div className="panel__buttons-container">{buttons}</div>
    </>
  );
};

StatusFilter.propTypes = {
  intl: PropTypes.any,
  isAddClient: PropTypes.bool,
};

export default injectIntl(StatusFilter);

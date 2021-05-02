import "../common.scss";
import React, { useState } from "react";
import { Modal, Header, Button, Dimmer } from "semantic-ui-react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import messages from "../../../Messages";

const CommonModal = ({
  intl,
  header,
  content,
  openModal,
  dimmer,
  handleClose,
  size,
}) => {
  return (
    <Dimmer active={dimmer} className="overlay">
      <Modal open={openModal} onClose={handleClose} size={size || "mini"}>
        <Header content={header} />
        <Modal.Content scrolling>
          <p className="description">{content}</p>
          <Modal.Actions align={"right"}>
            <Button
              onClick={handleClose}
              primary
              content={intl.formatMessage(messages.close)}
            />
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    </Dimmer>
  );
};

CommonModal.propTypes = {
  intl: PropTypes.any,
  header: PropTypes.any,
  content: PropTypes.any,
  openModal: PropTypes.bool,
  openModal: PropTypes.bool,
  handleClose: PropTypes.func,
  size: PropTypes.string,
};

export default injectIntl(CommonModal);

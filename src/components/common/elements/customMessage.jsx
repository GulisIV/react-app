import "../common.scss";
import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomMessage = ({ date, text }) => {
  const [show, setShow] = useState(true);

  const handleDismiss = () => {
    setShow(false);

    setTimeout(() => {
      setShow(true);
    }, 2000);
  };

  return (
    <>
      {show && (
        <Message onDismiss={handleDismiss} header={date} content={text} className="custom-message" />
      )}
    </>
  );
};

CustomMessage.propTypes = {
  date: PropTypes.any,
  text: PropTypes.any,
};

export default CustomMessage;

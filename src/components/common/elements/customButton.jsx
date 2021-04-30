import "../common.scss";
import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomButton = ({ isActive, setColor, setContent, handleClick, className }) => {
  let buttonView = isActive ? (
    <Button
      compact
      color={setColor}
      content={setContent}
      onClick={handleClick}
      className={className}
    />
  ) : (
    <Button
      basic
      compact
      color={setColor}
      content={setContent}
      onClick={handleClick}
      className={className}
    />
  );

  return <> {buttonView} </>;
};

CustomButton.propTypes = {
  isActive: PropTypes.bool,
  setColor: PropTypes.string,
  setContent: PropTypes.any,
  handleClick: PropTypes.func,
};

export default CustomButton;

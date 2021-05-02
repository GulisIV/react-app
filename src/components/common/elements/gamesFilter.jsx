import "../common.scss";
import React, { useState } from "react";
import { injectIntl } from "react-intl";
import messages from "../../../Messages";
import PropTypes from "prop-types";
import CustomButton from "../elements/customButton";

const GamesFilter = ({ intl }) => {
  const [all, setAll] = useState(false);
  const [gameOne, setGameOne] = useState(false);
  const [gameTwo, setGameTwo] = useState(false);
  const [gameThree, setGameThree] = useState(false);

  const setAllFalse = () => {
    setAll(false);
    setGameOne(false);
    setGameTwo(false);
    setGameThree(false);
  };

  const handleAll = () => {
    setAllFalse();
    setAll(!all);
  };

  const handleGameOne = () => {
    setAllFalse();
    setGameOne(!gameOne);
  };

  const handleGameTwo = () => {
    setAllFalse();
    setGameTwo(!gameTwo);
  };

  const handleGameThree = () => {
    setAllFalse();
    setGameThree(!gameThree);
  };

  return (
    <>
      <h5>{intl.formatMessage(messages.games)}</h5>
      <CustomButton
        isActive={all}
        setColor="blue"
        setContent={intl.formatMessage(messages.all)}
        handleClick={handleAll}
        className="activation__button"
      />
      <CustomButton
        isActive={gameOne}
        setColor="purple"
        setContent={intl.formatMessage(messages.gameOne)}
        handleClick={handleGameOne}
        className="activation__button"
      />
      <CustomButton
        isActive={gameTwo}
        setColor="teal"
        setContent={intl.formatMessage(messages.gameTwo)}
        handleClick={handleGameTwo}
        className="activation__button"
      />
      <CustomButton
        isActive={gameThree}
        setColor="pink"
        setContent={intl.formatMessage(messages.gameThree)}
        handleClick={handleGameThree}
        className="activation__button"
      />
    </>
  );
};

GamesFilter.propTypes = {
  intl: PropTypes.any,
};

export default injectIntl(GamesFilter);

import React from "react";
import { Button, Text } from "@geist-ui/core";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";

import Tick from "../../components/Tick/Tick";

export const Confirmation = ({ answer }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="thoth__confirmation-page">
      <FadeIn>
        <div className="thoth__confirmation-page__tick-svg">
          <Tick />
        </div>
        <div className="thoth__confirmation-page__title">
          <Text h1>Congratulations!</Text>
        </div>
        <div className="thoth__confirmation-page__answer">
          <Text p>{answer}</Text>
        </div>
        <div className="thoth__confirmation-page__button">
          <Button onClick={handleClick}> Back to Homepage </Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default Confirmation;

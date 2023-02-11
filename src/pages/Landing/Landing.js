import React from "react";
import { Image, Button, Text } from "@geist-ui/core";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";

const Landing = () => {
  return (
    <div className="thoth__landing-page">
      <FadeIn>
        <div className="thoth__landing-page__container">
          <div className="thoth__landing-page__title">
            <Text h2>Thoth</Text>
          </div>
          <div className="thoth__landing-page__subtitle">
            <Text p>A platform for computational puzzles.</Text>
          </div>
          <div className="thoth__landing-page__logo">
            <Image width="280px" height="160px" src={logo} />
          </div>
          <div className="thoth__landing-page__button">
            <Link to="/puzzle">
              <Button>Go to Puzzle</Button>
            </Link>
          </div>
          <div className="thoth__landing-page__button">
            <Link to="/halloffame">
              <Button>Go to Hall of Fame</Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Landing;

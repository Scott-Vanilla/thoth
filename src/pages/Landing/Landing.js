import React from "react";
import { Image, Button, Text, Card } from "@geist-ui/core";
import { Github } from "@geist-ui/icons";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";

const Landing = () => {
  // const getUser = () => {
  //   return localStorage.getItem("user");
  // };
  return (
    <div className="thoth__landing-page">
      <FadeIn>
        <div className="thoth__landing-page__header">
          {/*
          need to fix styling and remove local storage
          */}
          {/* <div className="thoth__landing-page__header__user">
            <Card hoverable>
              <Text p>{`Current user: ${getUser()}`}</Text>
              <Card.Footer>
                <Link
                  color
                  target="_blank"
                  href="https://github.com/geist-org/geist-ui"
                >
                  Go to my account.
                </Link>
              </Card.Footer>
            </Card>
          </div> */}
        </div>
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
          <div className="thoth__landing-page__button">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
          <div className="thoth__landing-page__button">
            <a href="https://github.com/Scott-Vanilla">
              <Github color="black" size={36} />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Landing;

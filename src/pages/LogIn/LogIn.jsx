import React, { useState } from "react";
import { Image, Text, Button } from "@geist-ui/core";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";
import SingleInputForm from "../../components/SingleInputForm/SingleInputForm";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const loginHandler = () => {
    axios
      .post(
        "https://0fubn14hlc.execute-api.eu-west-1.amazonaws.com/dev/login",
        {
          username: username,
          password: password,
        }
      )
      .then(function (response) {
        console.log(response)
        axios
          .post(
            "https://0fubn14hlc.execute-api.eu-west-1.amazonaws.com/dev/verify",
            {
              username: username,
              token: response.data.token,
            }
          )
          .then(function (response) {
            console.log(`Logged in as: ${response.data.username}`);
            navigate("/");
          })
          .catch(function (error) {
            setError("Incorrect username/password.");
          });
      })
      .catch(function (error) {
        setError("Incorrect username/password.");
      });
  };
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
          <div className="thoth__landing-page__subtitle">
            <Text p>Please login using your details.</Text>
          </div>
          <div
            className={
              error
                ? "thoth__ui-component__user-answer__input-box__error"
                : "thoth__ui-component__user-answer__input-box"
            }
          >
            <SingleInputForm
              customOnChange={(value) => setUsername(value)}
              label="Username"
            />
          </div>
          <div
            className={
              error
                ? "thoth__ui-component__user-answer__input-box__error"
                : "thoth__ui-component__user-answer__input-box"
            }
          >
            <SingleInputForm
              customOnChange={(value) => setPassword(value)}
              label="Password"
            />
          </div>
          {error && (
            <div className="thoth__ui-component__user-answer__incorrect-answer">
              <Text p>{error}</Text>
            </div>
          )}
          <div className="thoth__landing-page__button">
            <Button onClick={loginHandler}>Login</Button>
          </div>
          <div className="thoth__landing-page__button">
            <Link to="/register">
              <Button>Create an account</Button>
            </Link>
          </div>
          <div className="thoth__landing-page__button">
            <Link to="/">
              <Button>Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default LogIn;

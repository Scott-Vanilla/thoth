import React from "react";
import { Text, Image } from "@geist-ui/core";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Puzzle } from "../../components/Puzzle/Puzzle";
import logo from "../../assets/thoth-logo.png";
//import scott from "../../assets/scott.png";

import UserAnswer from "../../components/UserAnswer/UserAnswer";
//import UserBlock from "../../components/UserBlock/UserBlock";

export const PuzzlePage = () => {
  return (
    <div className="thoth__puzzle-page">
      <FadeIn>
        {/* <div className="thoth__puzzle-page__user">
        <UserBlock name="Scott MacDonald" image={scott} points={215} />
      </div> */}
        <Link to="/">
          <div className="thoth__puzzle-page__header">
            <div className="thoth__puzzle-page__title">
              <Text h1>Thoth</Text>
            </div>
            <div className="thoth__puzzle-page__logo">
              <Image width="75px" height="75px" src={logo} />
            </div>
          </div>
        </Link>
        <div className="thoth__puzzle-page__puzzle">
          <Puzzle
            puzzle={{
              title: "Q2 Puzzle 1: The 3 Rhiannas (Get it... Umbrella...)",
              image: "https://www.freeiconspng.com/thumbs/umbrella-icons/umbrella-icon-19.png",
              text: "Three identical-looking umbrellas are sitting upright in a stand. Assuming the owners don't check their umbrellas' labels, what percentage chance is there that only two people will walk off with their own umbrella? (You don't need to type in the % symbol at the end of your answer.)",
            }}
          />
          <UserAnswer />
        </div>
      </FadeIn>
    </div>
  );
};

export default PuzzlePage;

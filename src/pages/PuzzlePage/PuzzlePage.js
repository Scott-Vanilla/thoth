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
              title: "Q1 Puzzle 4: Mayor Mayhem",
              image: "https://cdn-icons-png.flaticon.com/512/33/33308.png",
              text: "Three people at odds with one another are running for mayor in the upcoming town election. They are all locals of the town, which has a voter population of 40. In order to win, a candidate must get more votes than any other candidate. If each of the 40 voters casts a single vote and every vote is recognised, what is the fewest number of votes a candidate needs to secure victory?",
            }}
          />
          <UserAnswer />
        </div>
      </FadeIn>
    </div>
  );
};

export default PuzzlePage;

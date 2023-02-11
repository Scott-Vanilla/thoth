import React from "react";
import { Text, Image } from "@geist-ui/core";

export const Puzzle = ({ puzzle }) => {
  return (
    <div className="thoth__ui-component__puzzle">
          <div className="thoth__ui-component__puzzle__title">
            <Text h2>{puzzle.title}</Text>
          </div>
          <div className="thoth__ui-component__puzzle__image">
            <Image width="280px" height="160px" src={puzzle.image} />
          </div>
          <div className="thoth__ui-component__puzzle__text">
            <Text p>{puzzle.text}</Text>
          </div>
    </div>
  );
};

export default Puzzle;

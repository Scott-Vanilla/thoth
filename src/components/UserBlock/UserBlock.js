import React from "react";
import { User } from "@geist-ui/core";

export const UserBlock = ({name, points, image}) => {
  return (
    <div className="thoth__ui-component__user">
      <User src={image} name={name}>
        {points} Points
      </User>
    </div>
  );
};

export default UserBlock;

import React, { useState } from "react";
import { Input, Button, Text } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const UserAnswer = () => {
  const answer = "20";
  const [value, setValue] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    console.log(value);
    console.log("answer: ", answer);
    if (value === answer) {
      setError(false);
      navigate('/success')
    } else {
      setError(true);
    }
  };
  return (
    <div className="thoth__ui-component__user-answer">
      <div className={error ? "thoth__ui-component__user-answer__input-box__error" : "thoth__ui-component__user-answer__input-box"}>
        <Input label="Answer" clearable onChange={handler} value={value} />
      </div>
      {error && (
        <div className="thoth__ui-component__user-answer__incorrect-answer">
          <Text p>Incorrect Answer. Please Try Again.</Text>
        </div>
      )}
      <div className="thoth__ui-component__user-answer__button">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default UserAnswer;

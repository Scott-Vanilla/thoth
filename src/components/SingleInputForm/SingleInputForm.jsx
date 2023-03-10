import React, { useState } from "react";
import { Input } from "@geist-ui/core";

const SingleInputForm = ({label, customOnChange}) => {
  const [value, setValue] = useState();
  const handler = (e) => {
    setValue(e.target.value);
    customOnChange? customOnChange(e.target.value): console.log('no custom on change');
  };
  return (
    <div className="thoth__ui-component__user-answer">
      <div className={"thoth__ui-component__user-answer__input-box"}>
        <Input label={label} clearable onChange={handler} value={value} />
      </div>
    </div>
  );
};

export default SingleInputForm;

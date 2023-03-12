import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onBlur={handleBlur}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

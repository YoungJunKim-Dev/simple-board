import React, { useState } from "react";
// import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="py-1">
      <span className="block text-sm font-medium text-slate-700 dark:text-white">
        {label}
      </span>
      <input
        className="focus:shadow-outline peer w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-300 dark:hover:bg-slate-500"
        {...inputProps}
        onBlur={handleBlur}
        onFocus={() => {
          setFocused("true");
          inputProps.name === "confirmPassword" && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <p
        className={`focus mt-2 hidden text-xs text-pink-500 ${
          focused ? "peer-invalid:block" : ""
        } peer-focus:visible`}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default FormInput;

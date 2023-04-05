import { useState } from "react";

const ContentInput = (props) => {
  const { label, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
    setFocused(true);
    console.log("blurred");
  };

  return (
    <div className="py-1">
      <span className="block text-sm font-medium text-slate-700 dark:text-white">
        {label}
      </span>
      <div className="h-80">
        <textarea
          className="form-input focus:shadow-outlinepeer h-full w-full resize-none appearance-none overflow-hidden rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-300 dark:hover:bg-slate-500"
          {...inputProps}
          maxLength={"2000"}
          onBlur={handleBlur}
          onFocus={() => {
            console.log("focused");
            setFocused("true");
            inputProps.name === "confirmPassword" && setFocused(true);
          }}
          focused={focused.toString()}
        />
      </div>
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

export default ContentInput;

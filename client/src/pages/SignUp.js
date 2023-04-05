import React, { useState } from "react";
import FormInput from "../components/FormInput";
import axios from "axios";
import Auth from "../services/auth";
import { useNavigate } from "react-router-dom";
// import "./signUp.css";

const SignUp = () => {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "한글 이름",
      type: "text",
      errorMessage: "한글 이름을 2~4자로 입력해주세요.",
      pattern: "^[가-힣]{2,4}$",
      label: "이름",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "이메일",
      type: "email",
      errorMessage: "이메일 양식에 맞추어 입력해주세요.",
      label: "이메일",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "생년월일",
      type: "date",
      errorMessage: "생년월일을 입력해주세요.",
      label: "생년월일",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "비밀번호",
      type: "text",
      errorMessage:
        "대소문자, 숫자, 특수문자로 이루어진 비밀번호를 입력해주세요.",
      label: "비밀번호",
      pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "비밀번호 확인",
      type: "password",
      errorMessage: "비밀번호가 틀립니다.",
      label: "비밀번호 확인",
      pattern: values["password"],
      required: true,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "/api/auth/signup";

    axios
      .post(url, values)
      .then((res) => {
        console.log(res);
        //Auth.setLocalStorage(res);
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  const fillEverything = () => {
    setvalues({
      username: "권지용",
      email: "gd@yg.ent",
      birthday: "1988-08-18",
      password: "1Q2w3e4r!",
      confirmPassword: "1Q2w3e4r!",
    });
  };
  const makeEmpty = () => {
    setvalues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs">
        <div class="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow dark:bg-slate-700 dark:shadow-slate-500"
          >
            <div className="flex justify-center pb-4">
              <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
                회원가입
              </span>
            </div>
            {inputs.map((input) => {
              return (
                <FormInput
                  key={input.id}
                  {...input}
                  onChange={handleChange}
                  value={values[input.name]}
                />
              );
            })}
            <div className="py-1">
              <span className="block text-sm font-medium text-slate-700 dark:text-white">
                {"국적"}
              </span>
              <div className="relative inline-block w-64">
                <select className="form-input focus:shadow-outline required peer w-full appearance-none rounded border bg-white py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder:text-slate-300 ">
                  <option>국적을 선택하세요</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-slate-200">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <span className="mt-2 hidden text-sm text-pink-600 peer-invalid:block">
                {"국적을 선택하세요"}
              </span>
            </div>
            <button className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none">
              Submit
            </button>
          </form>
          <div className="flex items-center justify-center">
            <button
              className="focus:shadow-outline rounded bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700 focus:outline-none"
              onClick={fillEverything}
            >
              Fill Input
            </button>
            <button
              className="focus:shadow-outline rounded bg-pink-500 py-2 px-4 font-bold text-white hover:bg-pink-700 focus:outline-none"
              onClick={makeEmpty}
            >
              Make Empty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

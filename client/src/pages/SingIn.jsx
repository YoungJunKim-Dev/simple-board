import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Auth from "../services/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import LoginState from "../states/LoginState";

const SignIn = () => {
  const url = "/api/auth/signin";
  const navigate = useNavigate();
  // const setLogInState = useSetRecoilState(LoginState);
  const [loginState, setLogInState] = useRecoilState(LoginState);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      type: "email",
      value: values.email,
      errorMessage: "이메일 양식에 맞추어 입력해주세요.",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "******************",
      value: values.password,
      type: "password",
      errorMessage: "비밀번호를 입력해주세요.",
      label: "Password",
      required: true,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    callApi();
  };

  const callApi = () => {
    axios
      .post(url, values)
      .then((result) => {
        console.log(result);
        Auth.setLocalStorage(result).then(({ member_id, username, image }) => {
          Auth.isLoggedIn()
            ? setLogInState({
                isLoggedIn: true,
                member_id: member_id,
                username: username,
                image: image,
              })
            : setLogInState(null);
          navigate(-1);
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something is wrong");
      });
  };
  const fillFrom = (e) => {
    e.preventDefault();
    setValues({ email: "gd@yg.ent", password: "1Q2w3e4r!" });
  };
  const makeEmpty = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
  };
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow dark:bg-slate-700 dark:shadow-slate-500"
        >
          <div className="flex justify-center pb-4">
            <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
              로그인
            </span>
          </div>
          <div className="mb-4">
            {inputs.map((input) => (
              <FormInput {...input} onChange={handleChange} />
            ))}
            {/* <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="username"
            >
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              value={values.username}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow invalid:border-pink-500  invalid:text-pink-600 focus:outline-none
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              id="password"
              type="password"
              placeholder="******************"
              value={values.password}
            />
            <p className="text-xs italic text-red-500 ">
              Please choose a password.
            </p>*/}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex space-x-2 ">
            <Button value={"FillInput"} onClick={fillFrom} />
            <Button value={"MakeEmpty"} onClick={makeEmpty} />
          </div>
        </form>
        <p class="text-center text-xs text-gray-500">
          &copy;2023 YJK Forum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignIn;

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
    switch (e.target.value) {
      case "user1":
        setValues({ email: "gd@yg.ent", password: "1Q2w3e4r!" });
        break;
      case "user2":
        setValues({ email: "son7@tottenham.spurs", password: "1Q2w3e4r!" });
        break;
      case "admin":
        setValues({ email: "admin@yjk.forum", password: "1Q2w3e4r!" });
        break;
      default:
        break;
    }
  };
  const makeEmpty = (e) => {
    e.preventDefault();

    setValues({ email: "", password: "" });
  };
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow dark:bg-slate-700 dark:shadow-slate-500"
        >
          <div className="flex justify-center pb-4">
            <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
              로그인
            </span>
          </div>
          <div className="mb-4">
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} onChange={handleChange} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-3 flex w-full justify-evenly space-x-2 text-sm">
            <button
              onClick={fillFrom}
              value="user1"
              className="focus:shadow-outline w-1/4  rounded bg-purple-500 px-2 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
            >
              User1
            </button>
            <button
              onClick={fillFrom}
              value="user2"
              className="focus:shadow-outline w-1/4 rounded bg-purple-500 px-2 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
            >
              User2
            </button>
            <button
              onClick={fillFrom}
              value="admin"
              className="focus:shadow-outline w-1/4 rounded bg-purple-500 px-2 py-2 font-bold text-white hover:bg-purple-700 focus:outline-none"
            >
              Admin
            </button>{" "}
            <button
              onClick={makeEmpty}
              className="focus:shadow-outline w-1/4 rounded bg-yellow-500 px-2 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none"
            >
              Empty
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;2023 YJK Forum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignIn;

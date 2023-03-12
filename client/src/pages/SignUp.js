import React, { useState } from "react";
import FormInput from "../components/FormInput";
import axios from "axios";
import "./signUp.css";

function SignUp() {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

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

    const url = "/api/members";

    axios
      .post(url, values)
      .then((res) => console.log(res))
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
    <div className="signUp">
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
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
        <button>Submit</button>
      </form>
      <div className="buttons">
        <button
          style={{ width: 100, margin: 20, backgroundColor: "yellowgreen" }}
          onClick={fillEverything}
        >
          Fill Input
        </button>
        <button
          style={{ width: 100, margin: 20, backgroundColor: "#f8c1f8" }}
          onClick={makeEmpty}
        >
          Make Empty
        </button>
      </div>
    </div>
  );
}
export default SignUp;

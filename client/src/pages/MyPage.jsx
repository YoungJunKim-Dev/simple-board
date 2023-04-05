import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import Auth from "../services/auth";
import { useRecoilState } from "recoil";
import LoginState from "../states/LoginState";

const MyPage = () => {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const navigate = useNavigate();

  useEffect(() => {
    callApi();
  }, []);

  const [values, setValues] = useState({
    username: "username",
    email: "email",
    birthday: "birthday",
    nationality: "nationality",
  });

  const url = "/api/members/mypage";
  const headers = { Authorization: localStorage.getItem("token") };
  const callApi = () => {
    axios
      .get(url, { headers: headers })
      .then((res) => {
        console.log("여기 " + res.data);
        setValues(res.data);
      })
      .catch((err) => navigate("/"));
  };
  const handleSignOut = () => {
    Auth.logout().then(() => {
      Auth.isLoggedOut()
        ? setLoginState(null)
        : setLoginState({ ...loginState });
      navigate("/");
    });
  };

  return (
    <div className="mt-8 flex flex-col px-4">
      <div className="ml-2">
        <span className="text-xl font-semibold leading-6 text-slate-700 dark:text-slate-200">
          마이페이지
        </span>
      </div>
      <Card>
        <div className="ml-2">
          <span className="text font-semibold leading-6 text-slate-700 dark:text-slate-200">
            개인정보
          </span>
        </div>
        <div className="my-4 w-full max-w-xs bg-slate-100 py-4 px-4 dark:bg-slate-800">
          <label>
            <span className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-200">
              이름
            </span>
            <span>{values.username}</span>
          </label>{" "}
          <div className="mb-5" />
          <label>
            <span className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-200">
              생년월일
            </span>
            <span>{values.birthday}</span>
          </label>{" "}
          <div className="mb-5" />
          <label>
            <span className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-200">
              국적
            </span>
            <span>{values.nationality}</span>
          </label>
          <div className="mb-5" />
          <label>
            <span className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-200">
              이메일
            </span>
            <span>{values.email}</span>
          </label>
        </div>
        <div className="ml-2">
          <span className="text font-semibold leading-6 text-slate-700 dark:text-slate-200">
            내가 쓴 글
          </span>
        </div>
      </Card>
    </div>
  );
};

export default MyPage;

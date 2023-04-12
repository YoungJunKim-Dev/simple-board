import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import MyPost from "../components/MyPost";
import { useRecoilValue } from "recoil";
import LoginState from "../states/LoginState";

const MyPage = () => {
  const navigate = useNavigate();
  const loginState = useRecoilValue(LoginState);

  useEffect(() => {
    callInfoApi();
    callPostsApi();
  }, []);

  const [values, setValues] = useState({
    username: "username",
    email: "email",
    birthday: "birthday",
    nationality: "nationality",
  });
  const [posts, setPosts] = useState([]);

  const myInfoUrl = "/api/members";
  const myPostsUrl = "/api/posts/user";
  const headers = { Authorization: localStorage.getItem("token") };
  const callInfoApi = () => {
    axios
      .get(`${myInfoUrl}/${loginState.member_id}`, { headers: headers })
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => navigate("/"));
  };
  const callPostsApi = () => {
    axios
      .get(`${myPostsUrl}/${loginState.member_id}`, { headers: headers })
      .then((res) => {
        setPosts(res.data);
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
        <div className="my-4 w-full max-w-xs rounded-xl border-b bg-slate-100 px-4 py-4 dark:border-slate-600 dark:bg-slate-800">
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
          <div className="mb-4 mt-8 shadow-sm">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b p-2 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200 sm:pl-4">
                    번호
                  </th>
                  <th className="border-b p-2 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200 sm:w-1/2">
                    제목
                  </th>
                  <th className="border-b p-2 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                    작성일
                  </th>
                  <th className="border-b p-2 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                    조회
                  </th>
                  <th className="border-b p-2 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                    수정
                  </th>
                  <th className="border-b p-2  pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200 sm:pr-4">
                    삭제
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {posts.map((post) => {
                  return (
                    <MyPost
                      {...post}
                      key={post.post_id}
                      setRefresh={callPostsApi}
                      user={false}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyPage;

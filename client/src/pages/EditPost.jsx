import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import FormInput from "../components/FormInput";
import LoginState from "../states/LoginState";
import { useNavigate, useParams } from "react-router-dom";
import ContentInput from "../components/ContentInput";
import axios from "axios";

const EditPost = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const loginState = useRecoilValue(LoginState);
  const putUrl = "/api/posts";
  const getUrl = `/api/posts/editpost/${id}`;
  const headers = { Authorization: localStorage.getItem("token") };
  const [content, setContent] = useState({ title: "", content: "" });

  useEffect(() => {
    callGetApi();
  }, []);

  const inputs = [
    {
      id: 1,
      label: "제목",
      name: "title",
      placeholder: "제목을 입력해 주세요",
      type: "text",
      required: true,
      maxLength: "50",
    },
  ];
  const contentInput = {
    id: 3,
    label: "내용",
    name: "content",
    placeholder: "내용을 입력해 주세요",
    required: true,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    callPutApi();
  };
  const handleCancel = () => {
    navigate(-1);
  };
  const callPutApi = () => {
    console.log(content);
    axios
      .put(putUrl, content, { headers: headers })
      .then((res) => {
        console.log("posting succeedd");
        navigate("/board");
      })
      .catch((err) => {
        console.log("posintg failed");
      });
  };
  const callGetApi = () => {
    axios
      .get(getUrl, { headers: headers })
      .then((res) => {
        setContent({ post_id: id, ...res.data });
      })
      .catch(() => navigate(-1));
  };

  return (
    <div className="my-8 flex flex-col px-4">
      <div className="ml-2">
        <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
          글쓰기
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mb-4 mt-4 rounded-xl bg-slate-50 px-8 pb-8 pt-6 shadow-md dark:bg-slate-800/25"
      >
        <div className="py-1">
          <span className="block text-sm font-medium text-slate-700 dark:text-white">
            {`작성자 : ${loginState.username}`}
          </span>
        </div>
        <FormInput
          {...inputs[0]}
          value={content.title}
          onChange={handleChange}
        />
        <ContentInput
          {...contentInput}
          value={content.content}
          onChange={handleChange}
        />
        <div className="mt-2 flex justify-end space-x-2">
          <button
            onClick={handleCancel}
            className="rounded-xl bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700"
          >
            취소
          </button>
          <button
            type="submit"
            className="rounded-xl bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700"
          >
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;

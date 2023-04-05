import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
// import "./write.css";

const Write = () => {
  const inputs = [
    {
      id: 1,
      label: "제목",
      name: "title",
      placeholder: "제목을 입력해 주세요",
      type: "text",
      required: true,
    },
    {
      id: 2,
      label: "작성자",
      name: "writer",
      placeholder: "작성자를 입력해 주세요",
      type: "text",
      required: true,
    },
    {
      id: 3,
      label: "내용",
      name: "content",
      placeholder: "내용을 입력해 주세요",
      type: "text",
      required: true,
    },
  ];
  const handleSubmit = () => {};

  return (
    <div className="writePage">
      <div className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
        글쓰기
      </div>
      <form
        onSubmit={handleSubmit}
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
      >
        {inputs.map((input) => {
          return <FormInput {...input} />;
        })}

        <div className="flex items-center space-x-4 align-middle">
          <Link to="/board">
            <button className="dark:highlight-white/10 flex h-12 w-full items-center justify-center rounded-lg bg-slate-100 px-6 font-medium text-slate-900 hover:bg-slate-700  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-500 sm:w-auto">
              취소
            </button>
          </Link>
          <button
            type="submit"
            className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
          >
            등록
          </button>
          <Button value={"버튼 예"} />
        </div>
      </form>
    </div>
  );
};
export default Write;

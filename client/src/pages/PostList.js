import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import axios from "axios";
import BoardTableSkeleton from "../components/skeleton/BoardTableSkeleton";
// import "./postList.css";

const PostList = () => {
  const url = "/api/posts";
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(url)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  const handleWriteButtonClicked = () => {
    navigate("/board/write");
  };

  return (
    <div className="mt-8 flex flex-col px-4">
      <div className="ml-2">
        <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
          게시판
        </span>
      </div>
      <div className="mt-8 mb-4 shadow-sm">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-1/12 border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                번호
              </th>
              <th className="w-1/2 border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                제목
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                작성자
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                작성일
              </th>
              <th className="w-1/12 border-b  p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                조회
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {posts
              ? posts.map((post) => <Post {...post} />)
              : ["", "", ""].map(() => <BoardTableSkeleton />)}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleWriteButtonClicked}
          className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-sky-700"
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default PostList;

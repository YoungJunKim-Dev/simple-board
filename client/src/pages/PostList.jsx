import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Post from "../components/Post";
import axios from "axios";
import BoardTableSkeleton from "../components/skeleton/BoardTableSkeleton";
import Pagination from "../components/Pagination";

const PostList = () => {
  const url = "/api/posts";
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
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
      <div className="mb-4 mt-4 shadow-sm">
        <div className="mb-4 flex justify-end">
          <label>
            페이지 당 게시물 수 : &nbsp;
            <select
              type="number"
              value={limit}
              className="active::bg-slate-50 rounded bg-slate-50 py-1 text-center dark:bg-slate-900"
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>

        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-1/12 border-b p-4 pb-3 pl-8 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                번호
              </th>
              <th className="w-1/2 border-b p-4 pb-3 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                제목
              </th>
              <th className="border-b p-4 pb-3 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                작성자
              </th>
              <th className="border-b p-4 pb-3 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                작성일
              </th>
              <th className="w-1/12 border-b  p-4 pb-3 pr-8 pt-0 text-center font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                조회
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {posts
              ? posts
                  .slice(offset, offset + limit)
                  .map((post) => <Post key={post.post_id} {...post} />)
              : [{ id: 1 }, { id: 2 }, { id: 3 }].map((id) => (
                  <BoardTableSkeleton key={id.id} />
                ))}
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
      <div className="mb-4 flex justify-center">
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default PostList;

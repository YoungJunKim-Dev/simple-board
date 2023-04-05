import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostContent = () => {
  let { id } = useParams();
  const url = `/api/posts/${id}`;
  const [postContent, setPostContent] = useState({
    post_id: "",
    title: "",
    content: "",
    member_id: "",
    created_date: "",
    views: "",
  });

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(url)
      .then((result) => {
        setPostContent(result.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-8 flex h-fit flex-col px-4">
      <div className="mb-4 mt-4 rounded-xl bg-slate-50 px-8 pt-6 pb-8 shadow-md dark:bg-slate-800/25">
        <div>
          <p className="mb-2 text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
            {postContent.created_date}
          </p>
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              {postContent.title}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
          {postContent.created_date}
        </p>
        <div>{postContent.content}</div>
      </div>
    </div>
  );
};

export default PostContent;

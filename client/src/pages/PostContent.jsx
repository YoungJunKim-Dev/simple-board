import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const PostContent = () => {
  let { id } = useParams();
  const url = `/api/posts/${id}`;
  const [postContent, setPostContent] = useState({
    post_id: "",
    title: "",
    content: "",
    username: "",
    image: "",
    created_date: "",
    views: "",
  });
  const createdMoment = moment(postContent.created_date);
  const created_at = createdMoment.format("MM-DD HH:mm");

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
      <div className="mb-4 mt-4 rounded-xl bg-slate-50 px-8 pb-8 pt-6 shadow-md dark:bg-slate-800/25">
        <div>
          <div className="flex items-center">
            <h1 className="mb-1 inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl">
              {postContent.title}
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
              {`작성일시 : `}{" "}
            </p>

            <div className="ml-2">
              <div className="text-sm font-medium leading-5 text-gray-900 dark:text-slate-200">
                {created_at}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-semibold leading-6 text-sky-500 dark:text-sky-400">
              {`작성자 : `}{" "}
            </p>

            <div className="ml-2 h-4 w-4 flex-shrink-0">
              <img
                className="h-4 w-4 rounded-full"
                src={postContent.image}
                alt="profile"
              />
            </div>
            <div className="ml-1">
              <div className="text-sm font-medium leading-5 text-gray-900 dark:text-slate-200">
                {postContent.username}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">{postContent.content}</div>
      </div>
    </div>
  );
};

export default PostContent;

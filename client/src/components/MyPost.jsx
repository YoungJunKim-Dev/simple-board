import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const MyPost = (props) => {
  const { post_id, title, created_date, views, setRefresh, user } = props;
  const headers = { Authorization: localStorage.getItem("token") };
  const navigate = useNavigate();
  const url = `/api/posts/${post_id}`;
  const now = moment();
  const createdMoment = moment(created_date);
  let created_at = "";

  const diff = now.diff(createdMoment, "hours");
  if (diff < 24) {
    created_at = createdMoment.format("HH:mm");
  } else {
    created_at = createdMoment.format("MM-DD");
  }
  const handleEdit = () => {
    navigate(`/editpost/${post_id}`);
  };
  const handleDelete = () => {
    axios
      .delete(url, { headers: headers })
      .then(() => {
        setRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700">
      <td className="border-b border-slate-100 p-2 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:pl-4">
        <div className="text-sm leading-5 text-gray-500">{post_id} </div>
      </td>
      <td className="border-b border-slate-100 p-2 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{title} </div>
      </td>

      <td className="border-b border-slate-100 p-2 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{created_at}</div>
      </td>

      <td className="border-b border-slate-100 p-2 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{views}</div>
      </td>
      {user ? (
        ""
      ) : (
        <td className="border-b border-slate-100 p-2 text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <div
            onClick={handleEdit}
            className="flex cursor-pointer justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </td>
      )}

      <td className="flex justify-center border-b border-slate-100 p-2 text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:pr-4">
        <svg
          onClick={handleDelete}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </td>
    </tr>
  );
};

export default MyPost;

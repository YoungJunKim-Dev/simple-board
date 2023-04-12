import moment from "moment";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Post = (props) => {
  const { post_id, title, image, username, created_date, views } = props;
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["visited"]);
  const updateViewsUrl = `/api/posts/views/${post_id}`;
  const now = moment();
  const createdMoment = moment(created_date);
  let created_at = "";

  const diff = now.diff(createdMoment, "hours");
  if (diff < 24) {
    created_at = createdMoment.format("HH:mm");
  } else {
    created_at = createdMoment.format("MM-DD");
  }

  const handleNavigateToPost = () => {
    const expires = moment().endOf("day");
    if (!cookies.visited) {
      const newCookie = { [post_id]: true };
      setCookies("visited", newCookie, {
        path: "/board",
        expires: expires.toDate(),
      });
      axios
        .put(updateViewsUrl)
        .then((res) => console.log(res))
        .catch((err) => alret(err));
    } else {
      if (!cookies.visited[post_id]) {
        const newCookie = { ...cookies.visited, [post_id]: true };
        setCookies("visited", newCookie, {
          path: "/board",
          expires: expires.toDate(),
        });
        axios
          .put(updateViewsUrl)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    }
    navigate(`/board/${post_id}`);
  };

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700">
      <td className="border-b border-slate-100 p-4 pl-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {post_id}
      </td>
      <td
        onClick={handleNavigateToPost}
        className="border-b border-slate-100 p-4 text-left text-slate-500 hover:cursor-pointer hover:font-semibold hover:underline dark:border-slate-700 dark:text-slate-400"
      >
        {title}
      </td>
      <td className="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="flex items-center">
          <div className="h-6 w-6 flex-shrink-0">
            <img className="h-6 w-6 rounded-full" src={image} alt="profile" />
          </div>

          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900 dark:text-white">
              {username}
            </div>
          </div>
        </div>
      </td>
      <td className="border-b border-slate-100 p-4 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {created_at}
      </td>
      <td className="border-b border-slate-100 p-4 pr-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {views}
      </td>
    </tr>
    // <tr className="dark:bg-slate-700 ">
    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
    //     <div className="text-sm leading-5 text-gray-500 dark:text-slate-50">
    //       {post_id}{" "}
    //     </div>
    //   </td>

    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
    //     <Link to={`/board/${post_id}`}>
    //       <div className="text-sm leading-5 text-gray-500 dark:text-slate-50">
    //         {title}
    //       </div>
    //     </Link>
    //   </td>
    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
    //     <div className="flex items-center">
    //       <div className="h-10 w-10 flex-shrink-0">
    //         <img className="h-10 w-10 rounded-full" src={image} alt="profile" />
    //       </div>

    //       <div className="ml-4">
    //         <div className="text-sm font-medium leading-5 text-gray-900 dark:text-white">
    //           {username}
    //         </div>
    //       </div>
    //     </div>
    //   </td>

    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
    //     <div className="text-sm leading-5 text-gray-500 dark:text-slate-50">
    //       {created_date}
    //     </div>
    //   </td>
    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
    //     <div className="text-sm leading-5 text-gray-500 dark:text-slate-50">
    //       {views}
    //     </div>
    //   </td>

    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500 dark:text-slate-50">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6 text-blue-400"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    //       />
    //     </svg>
    //   </td>
    //   <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500 dark:text-slate-50">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-6 w-6 text-red-400"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    //       />
    //     </svg>
    //   </td>
    // </tr>
    //==========================================================================
    // <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    //   <td className="p-4 w-4">{post_id}</td>
    //   <Link
    //     to={`/board/view/no=${post_id}`}
    //     className="text-blue-600 dark:text-blue-500 hover:underline"
    //   >
    //     <td className="p-4 w-4 ">{title}</td>
    //   </Link>
    //   <td className="p-4 w-4">
    //     <img
    //       src={image}
    //       alt="profile"
    //       style={{ height: "20px", width: "20px" }}
    //     />
    //     {username}
    //   </td>
    //   <td className="p-4 w-4">{created_date}</td>
    //   <td className="p-4 w-4">{views}</td>
    //   <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
    //     <Link
    //       to="#"
    //       className="text-blue-600 dark:text-blue-500 hover:underline"
    //     >
    //       Edit
    //     </Link>
    //   </td>
    // </tr>
  );
};

export default Post;

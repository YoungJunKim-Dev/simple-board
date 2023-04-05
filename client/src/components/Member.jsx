import React from "react";
import { Link } from "react-router-dom";

function Member(props) {
  const { member_id, image, username, birthday, nationality, email, onClick } =
    props;

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-700">
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{member_id} </div>
      </td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={image} alt="profile" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900 dark:text-slate-200">
              {username}
            </div>
          </div>
        </div>
      </td>

      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{email}</div>
      </td>

      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{birthday}</div>
      </td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="text-sm leading-5 text-gray-500">{nationality}</div>
      </td>

      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <Link to="/write">
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
        </Link>
      </td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <svg
          onClick={() => {
            onClick(member_id);
          }}
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
    // <>
    //   <TableRow>
    //     <TableCell>{member_id}</TableCell>
    //     <TableCell>
    //       <img
    //         src={image}
    //         alt="profile"
    //         style={{ height: "100px", width: "100px" }}
    //       />
    //     </TableCell>
    //     <TableCell>{username}</TableCell>
    //     <TableCell>{birthday}</TableCell>
    //     <TableCell>{nationality}</TableCell>
    //     <TableCell>{email}</TableCell>
    //     <TableCell>
    //       <button onClick={() => onClick(member_id)}>삭제</button>
    //     </TableCell>
    //   </TableRow>
    // </>
  );
}

export default Member;
